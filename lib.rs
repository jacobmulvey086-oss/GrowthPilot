// SpacetimeDB imports
use spacetimedb::{table, reducer, ReducerContext, Table, Timestamp, TimeDuration};
use std::time::Duration;

// --- Table Definitions ---

#[table(name = user, public)]
#[derive(Clone)]
pub struct User {
    #[primary_key]
    email: String,
    password_hash: String,
    is_pro: bool,
    created_at: Timestamp,
}

#[table(name = user_progress, public)]
#[derive(Clone)]
pub struct UserProgress {
    #[primary_key]
    email: String,
    current_goal: String,
    niche: String,
    completed_tasks: Vec<u32>,
    last_active: Timestamp,
}

#[table(name = streak, public)]
#[derive(Clone)]
pub struct Streak {
    #[primary_key]
    email: String,
    current_streak: u32,
    longest_streak: u32,
    last_check_in: Timestamp,
}

// --- Helper Logic ---

fn initial_last_check_in(ts: Timestamp) -> Timestamp {
    // Initialize last_check_in 48h in the past to allow first check-in to start the streak immediately
    ts.checked_sub(TimeDuration::from_duration(Duration::from_secs(48 * 60 * 60)))
        .unwrap_or(ts)
}

fn update_streak_on_check_in_internal(streak: &mut Streak, now: Timestamp) {
    let now_us = now.to_micros_since_unix_epoch();
    let last_us = streak.last_check_in.to_micros_since_unix_epoch();
    let delta_us = now_us - last_us;

    let day_us: i64 = 86_400_000_000;
    let two_days_us: i64 = day_us * 2;

    if delta_us < day_us {
        // Already checked in within 24h - do not increment or reset
        return;
    } else if delta_us <= two_days_us {
        // 24-48h since last check-in => increment streak
        streak.current_streak = streak.current_streak.saturating_add(1);
        if streak.current_streak > streak.longest_streak {
            streak.longest_streak = streak.current_streak;
        }
        streak.last_check_in = now;
    } else {
        // >48h => reset streak to 1
        streak.current_streak = 1;
        if streak.current_streak > streak.longest_streak {
            streak.longest_streak = streak.current_streak;
        }
        streak.last_check_in = now;
    }
}

fn ensure_progress_row(ctx: &ReducerContext, email: &String) {
    if ctx.db.user_progress().email().find(email).is_none() {
        let progress = UserProgress {
            email: email.clone(),
            current_goal: String::new(),
            niche: String::new(),
            completed_tasks: Vec::new(),
            last_active: ctx.timestamp,
        };
        let _ = ctx.db.user_progress().try_insert(progress);
    }
}

fn ensure_streak_row(ctx: &ReducerContext, email: &String) {
    if ctx.db.streak().email().find(email).is_none() {
        let row = Streak {
            email: email.clone(),
            current_streak: 0,
            longest_streak: 0,
            last_check_in: initial_last_check_in(ctx.timestamp),
        };
        let _ = ctx.db.streak().try_insert(row);
    }
}

// --- Reducers ---

#[reducer]
pub fn create_user(ctx: &ReducerContext, email: String, password_hash: String) -> Result<(), String> {
    // Ensure no existing account with this email
    if ctx.db.user().email().find(&email).is_some() {
        return Err("User with this email already exists".to_string());
    }

    let user = User {
        email: email.clone(),
        password_hash,
        is_pro: false,
        created_at: ctx.timestamp,
    };

    match ctx.db.user().try_insert(user) {
        Ok(_) => {
            // Seed dependent tables
            ensure_progress_row(ctx, &email);
            ensure_streak_row(ctx, &email);
            Ok(())
        }
        Err(e) => Err(format!("Failed to create user: {}", e)),
    }
}

#[reducer]
pub fn authenticate_user(ctx: &ReducerContext, email: String, password_hash: String) -> Result<(), String> {
    if let Some(user) = ctx.db.user().email().find(&email) {
        if user.password_hash == password_hash {
            // Ensure supporting rows exist for client subscriptions
            ensure_progress_row(ctx, &email);
            ensure_streak_row(ctx, &email);
            Ok(())
        } else {
            Err("Invalid credentials".to_string())
        }
    } else {
        Err("User not found".to_string())
    }
}

#[reducer]
pub fn update_subscription(ctx: &ReducerContext, email: String, is_pro: bool) -> Result<(), String> {
    if let Some(mut user) = ctx.db.user().email().find(&email) {
        user.is_pro = is_pro;
        ctx.db.user().email().update(user);
        Ok(())
    } else {
        Err("User not found".to_string())
    }
}

#[reducer]
pub fn update_user_selections(
    ctx: &ReducerContext,
    email: String,
    current_goal: String,
    niche: String,
) -> Result<(), String> {
    // Ensure row exists for this user
    ensure_progress_row(ctx, &email);

    if let Some(mut progress) = ctx.db.user_progress().email().find(&email) {
        progress.current_goal = current_goal;
        progress.niche = niche;
        progress.last_active = ctx.timestamp;
        ctx.db.user_progress().email().update(progress);
        Ok(())
    } else {
        Err("Progress row missing and could not be created".to_string())
    }
}

#[reducer]
pub fn save_progress(ctx: &ReducerContext, email: String, completed_tasks: Vec<u32>) -> Result<(), String> {
    ensure_progress_row(ctx, &email);
    ensure_streak_row(ctx, &email);

    // Update progress
    if let Some(mut progress) = ctx.db.user_progress().email().find(&email) {
        let previous_len = progress.completed_tasks.len();
        let new_len = completed_tasks.len();

        progress.completed_tasks = completed_tasks;
        progress.last_active = ctx.timestamp;
        ctx.db.user_progress().email().update(progress);

        // Automatically calculate/update streak when tasks are completed (increase in count)
        if new_len > previous_len {
            if let Some(mut streak) = ctx.db.streak().email().find(&email) {
                update_streak_on_check_in_internal(&mut streak, ctx.timestamp);
                ctx.db.streak().email().update(streak);
            }
        }
        Ok(())
    } else {
        Err("Progress row missing and could not be created".to_string())
    }
}

#[reducer]
pub fn check_in(ctx: &ReducerContext, email: String) -> Result<(), String> {
    ensure_streak_row(ctx, &email);

    if let Some(mut streak) = ctx.db.streak().email().find(&email) {
        update_streak_on_check_in_internal(&mut streak, ctx.timestamp);
        ctx.db.streak().email().update(streak);
        Ok(())
    } else {
        Err("Streak row missing and could not be created".to_string())
    }
}

#[reducer]
pub fn get_user_data(ctx: &ReducerContext, email: String) -> Result<(), String> {
    // Ensure all data rows exist so clients can read via subscriptions
    if ctx.db.user().email().find(&email).is_none() {
        return Err("User not found".to_string());
    }

    ensure_progress_row(ctx, &email);
    ensure_streak_row(ctx, &email);

    // Optionally refresh last_active to reflect data retrieval intent
    if let Some(mut progress) = ctx.db.user_progress().email().find(&email) {
        progress.last_active = ctx.timestamp;
        ctx.db.user_progress().email().update(progress);
    }

    Ok(())
}