'use client';

import { LocalNotifications, type ScheduleOptions } from '@capacitor/local-notifications';

const NOTIFICATION_IDS = {
  TASK_REMINDER_1: 1001,
  TASK_REMINDER_2: 1002,
  TASK_REMINDER_3: 1003,
  TASK_REMINDER_4: 1004,
  TASK_REMINDER_5: 1005,
};

export class RecurringNotificationService {
  // Schedule recurring notifications every 2-3 hours during active hours (9am - 9pm)
  static async scheduleRecurringReminders(incompleteTasks: number): Promise<void> {
    try {
      const hasPermission = await this.checkPermission();
      if (!hasPermission) {
        console.log('Notification permission denied');
        return;
      }

      // Cancel any existing notifications first
      await this.cancelAllReminders();

      if (incompleteTasks === 0) {
        console.log('No incomplete tasks, skipping notification scheduling');
        return;
      }

      const now = new Date();
      const notifications: ScheduleOptions = { notifications: [] };

      // Schedule 5 notifications throughout the day (2-3 hours apart)
      const times = [
        { hour: 10, minute: 0 },  // 10:00 AM
        { hour: 12, minute: 30 }, // 12:30 PM
        { hour: 15, minute: 0 },  // 3:00 PM
        { hour: 17, minute: 30 }, // 5:30 PM
        { hour: 20, minute: 0 },  // 8:00 PM
      ];

      const messages = [
        '🎯 Hey! You have tasks waiting for you',
        '💪 Keep the momentum going - complete your tasks',
        '🚀 Your goals are waiting! Check your tasks',
        "⭐ Don't break your streak - complete a task today",
        '🔥 Last reminder for today - finish your tasks!'
      ];

      times.forEach((time, index) => {
        const notificationTime = new Date();
        notificationTime.setHours(time.hour, time.minute, 0, 0);

        // If time has passed today, schedule for tomorrow
        if (notificationTime <= now) {
          notificationTime.setDate(notificationTime.getDate() + 1);
        }

        const notificationId = Object.values(NOTIFICATION_IDS)[index];
        
        notifications.notifications.push({
          title: 'GrowthPilot',
          body: `${messages[index]} (${incompleteTasks} remaining)`,
          id: notificationId,
          schedule: { 
            at: notificationTime,
            repeats: true,
            every: 'day'
          },
          sound: undefined,
          attachments: undefined,
          actionTypeId: '',
          extra: { type: 'task_reminder' },
        });
      });

      await LocalNotifications.schedule(notifications);
      console.log('Scheduled recurring reminders:', notifications.notifications.length);
    } catch (error) {
      console.error('Failed to schedule recurring notifications:', error);
    }
  }

  static async checkPermission(): Promise<boolean> {
    try {
      const result = await LocalNotifications.checkPermissions();
      if (result.display !== 'granted') {
        const requested = await LocalNotifications.requestPermissions();
        return requested.display === 'granted';
      }
      return true;
    } catch (error) {
      console.error('Permission check failed:', error);
      return false;
    }
  }

  static async cancelAllReminders(): Promise<void> {
    try {
      const pendingNotifications = await LocalNotifications.getPending();
      const reminderIds = pendingNotifications.notifications
        .filter(n => n.extra && n.extra.type === 'task_reminder')
        .map(n => ({ id: n.id }));

      if (reminderIds.length > 0) {
        await LocalNotifications.cancel({ notifications: reminderIds });
        console.log('Cancelled existing reminders:', reminderIds.length);
      }
    } catch (error) {
      console.error('Failed to cancel notifications:', error);
    }
  }

  static async sendStreakCelebration(streakDays: number): Promise<void> {
    try {
      const hasPermission = await this.checkPermission();
      if (!hasPermission) return;

      const milestones = [3, 7, 14, 30, 60, 90, 180, 365];
      if (!milestones.includes(streakDays)) return;

      const messages: Record<number, string> = {
        3: "🔥 3-day streak! You're on fire!",
        7: "⭐ 7-day streak! That's a full week!",
        14: '💪 2-week streak! Incredible consistency!',
        30: "🚀 30-day streak! You're unstoppable!",
        60: '🏆 60-day streak! Legendary!',
        90: "👑 90-day streak! You're a champion!",
        180: '💎 180-day streak! Half a year!',
        365: '🎉 365-day streak! A full year! Amazing!'
      };

      await LocalNotifications.schedule({
        notifications: [{
          title: 'Streak Milestone!',
          body: messages[streakDays] as string,
          id: 2000 + streakDays,
          schedule: { at: new Date(Date.now() + 1000) },
          sound: undefined,
          attachments: undefined,
          actionTypeId: '',
          extra: { type: 'streak_celebration' },
        }]
      });
    } catch (error) {
      console.error('Failed to send streak celebration:', error);
    }
  }
}
