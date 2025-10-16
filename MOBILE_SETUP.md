# 📱 Mobile App Setup Guide

This guide will help you build and deploy your PathFinder app to iOS and Android devices.

## Prerequisites

- Node.js 18+ installed
- For iOS: macOS with Xcode 14+
- For Android: Android Studio with SDK 33+
- Apple Developer account ($99/year) for iOS App Store
- Google Play Console account ($25 one-time) for Android Play Store

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_here
NEXT_PUBLIC_APP_URL=https://your-domain.com

# OpenAI Configuration  
OPENAI_API_KEY=sk-your_openai_key_here
```

### 3. Build the Web App

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### 4. Initialize Capacitor (First Time Only)

```bash
npx cap init
```

When prompted:
- **App name**: PathFinder
- **App ID**: com.pathfinder.app
- **Web asset directory**: out

### 5. Add Platforms

```bash
# For iOS
npx cap add ios

# For Android
npx cap add android
```

### 6. Sync Your Web Build

```bash
npx cap sync
```

This copies your `out/` folder into the native projects.

---

## 📱 iOS Development

### Open in Xcode

```bash
npx cap open ios
```

### Configure App in Xcode

1. **Select your team** in Signing & Capabilities
2. **Update Bundle Identifier** to match your Apple Developer account
3. **Add capabilities**:
   - Push Notifications
   - Background Modes → Remote notifications

### Run on Simulator

1. Select a simulator from the device dropdown
2. Click the Play button (▶️)

### Run on Physical Device

1. Connect your iPhone via USB
2. Trust the device when prompted
3. Select your device from the dropdown
4. Click Play

### Build for App Store

1. Product → Archive
2. Upload to App Store Connect
3. Fill in app metadata at https://appstoreconnect.apple.com
4. Submit for review

---

## 🤖 Android Development

### Open in Android Studio

```bash
npx cap open android
```

### Configure App in Android Studio

1. **Update `applicationId`** in `app/build.gradle` if needed
2. **Sync Gradle files**
3. **Generate signing key** (for production):

```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

### Run on Emulator

1. Create an emulator in AVD Manager (Tools → AVD Manager)
2. Click the Run button (▶️)

### Run on Physical Device

1. Enable Developer Options on your Android device
2. Enable USB Debugging
3. Connect via USB
4. Select your device and click Run

### Build for Google Play

1. Build → Generate Signed Bundle / APK
2. Choose Android App Bundle (AAB)
3. Upload to Google Play Console at https://play.google.com/console
4. Fill in store listing
5. Submit for review

---

## 🔔 Push Notifications Setup

### iOS (APNs)

1. Go to Apple Developer → Certificates, Identifiers & Profiles
2. Create an APNs certificate for your app
3. Download and install the certificate
4. Enable Push Notifications in Xcode capabilities

### Android (FCM)

1. Go to Firebase Console → Project Settings
2. Add your Android app
3. Download `google-services.json`
4. Place it in `android/app/`
5. Update `android/build.gradle` with Firebase dependencies

---

## 🔧 Common Commands

```bash
# Rebuild web assets and sync
npm run build && npx cap sync

# Open iOS project
npx cap open ios

# Open Android project
npx cap open android

# Update Capacitor plugins
npx cap update

# See Capacitor doctor for issues
npx cap doctor
```

---

## 🐛 Troubleshooting

### iOS Build Fails

- Ensure Xcode Command Line Tools are installed: `xcode-select --install`
- Clear DerivedData: `rm -rf ~/Library/Developer/Xcode/DerivedData`
- Clean build folder in Xcode: Product → Clean Build Folder

### Android Build Fails

- Invalidate Caches: File → Invalidate Caches / Restart
- Check Java version: `java -version` (should be 11 or 17)
- Update Gradle: `./gradlew wrapper --gradle-version=8.0`

### App Not Loading

- Check `capacitor.config.ts` has correct `webDir: 'out'`
- Ensure `npm run build` completed successfully
- Run `npx cap sync` after every web build

### Notifications Not Working

- iOS: Check provisioning profile includes Push Notifications
- Android: Verify `google-services.json` is in correct location
- Both: Request permissions at runtime using NotificationService

---

## 📦 App Store Submission Checklist

### Both Platforms

- [ ] App icons (1024x1024 PNG)
- [ ] Screenshots (various device sizes)
- [ ] Privacy policy URL
- [ ] App description
- [ ] Keywords/categories
- [ ] Age rating
- [ ] Support URL/email

### iOS Specific

- [ ] App Store Connect account setup
- [ ] Archive uploaded
- [ ] TestFlight testing (recommended)
- [ ] App review information

### Android Specific

- [ ] Google Play Console account
- [ ] Signed AAB uploaded
- [ ] Content rating questionnaire
- [ ] Store listing complete

---

## 🎉 You're Ready!

Your PathFinder app is now:
- ✅ Installable on iOS devices
- ✅ Installable on Android devices
- ✅ Receiving push notifications
- ✅ Processing real Stripe payments
- ✅ Using AI chatbot for help

For support, visit the Capacitor docs: https://capacitorjs.com/docs
