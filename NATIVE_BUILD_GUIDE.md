# 📱 GrowthPilot Native App Build Guide

Welcome to your native app setup! GrowthPilot is now configured as a full native application for iOS and Android.

## 🚀 Quick Start

### Prerequisites

**For iOS Development:**
- macOS computer
- Xcode 14+ installed from App Store
- CocoaPods installed: `sudo gem install cocoapods`
- Apple Developer Account ($99/year for App Store distribution)

**For Android Development:**
- Android Studio installed
- Java Development Kit (JDK) 17+
- Android SDK with API level 33+

### Initial Setup

1. **Build the web app:**
   ```bash
   npm run build
   ```

2. **Initialize native platforms** (first time only):
   ```bash
   # For iOS (macOS only)
   npx cap add ios
   
   # For Android
   npx cap add android
   ```

3. **Sync web code to native platforms:**
   ```bash
   npx cap sync
   ```

## 📦 Build Process

### Building for iOS

1. **Open Xcode:**
   ```bash
   npx cap open ios
   ```

2. **In Xcode:**
   - Select your development team in "Signing & Capabilities"
   - Change bundle identifier if needed: `com.growthpilot.app`
   - Select a simulator or connected device
   - Click the Play button to build and run

3. **For App Store submission:**
   - Product → Archive
   - Follow Apple's App Store Connect workflow

### Building for Android

1. **Open Android Studio:**
   ```bash
   npx cap open android
   ```

2. **In Android Studio:**
   - Wait for Gradle sync to complete
   - Select a device/emulator from the device dropdown
   - Click the Play button to build and run

3. **For Google Play submission:**
   - Build → Generate Signed Bundle/APK
   - Follow Google Play Console workflow

## 🔄 Development Workflow

After making changes to your web code:

```bash
# 1. Build the Next.js app
npm run build

# 2. Copy web assets to native projects
npx cap copy

# 3. Open in native IDE to test
npx cap open ios    # or
npx cap open android
```

**Pro tip:** Use `npx cap sync` to both copy and update native dependencies in one command.

## 🎨 Customizing Your App

### App Icons & Splash Screens

1. Create your assets:
   - **App Icon:** 1024x1024px PNG (no transparency)
   - **Splash Screen:** 2732x2732px PNG

2. Use a tool like [Capacitor Asset Generator](https://github.com/capacitor-community/assets)
   ```bash
   npm install -g @capacitor/assets
   npx capacitor-assets generate
   ```

### Push Notifications Setup

**iOS (APNs):**
1. Enable Push Notifications in Xcode capabilities
2. Create APNs certificate in Apple Developer Portal
3. Configure your backend to send notifications

**Android (FCM):**
1. Create Firebase project
2. Add `google-services.json` to `android/app/`
3. Update `android/build.gradle` with FCM dependencies

## 🔧 Configuration

Edit `capacitor.config.ts` to customize:

```typescript
const config: CapacitorConfig = {
  appId: 'com.growthpilot.app',     // Your unique app ID
  appName: 'GrowthPilot',            // App display name
  webDir: 'out',                      // Next.js export folder
  // ... more options
};
```

## 🐛 Troubleshooting

### iOS Issues

**Pods install fails:**
```bash
cd ios/App
pod install --repo-update
```

**Xcode build errors:**
- Clean build folder: Product → Clean Build Folder
- Delete derived data
- Restart Xcode

### Android Issues

**Gradle sync fails:**
- File → Invalidate Caches and Restart
- Check Android SDK is up to date
- Verify JDK version (should be 17+)

**Module not found:**
```bash
cd android
./gradlew clean
```

## 📚 Next Steps

### Testing
- Use iOS Simulator and Android Emulator for quick testing
- Test on real devices before submission
- Use TestFlight (iOS) and Internal Testing (Android) for beta distribution

### App Store Submission
- iOS: Submit via App Store Connect
- Android: Submit via Google Play Console
- Both require app privacy policy, screenshots, and descriptions

### Monetization
- Consider switching from Stripe to In-App Purchases (IAP)
- Apple and Google take 15-30% commission
- IAP provides native payment experience

## 🎯 Features Enabled

Your GrowthPilot native app now includes:

✅ **Push Notifications** - Send task reminders to users
✅ **Local Notifications** - Schedule reminders directly on device
✅ **Offline Support** - App works without internet (with proper caching)
✅ **Native Performance** - Smooth animations and faster load times
✅ **Device Integration** - Access to camera, contacts, Face ID, etc.
✅ **App Store Presence** - Discoverability and credibility

## 🔗 Useful Resources

- [Capacitor Docs](https://capacitorjs.com/docs)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Android Design Guidelines](https://developer.android.com/design)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Google Play Policy](https://play.google.com/about/developer-content-policy/)

## 💡 Tips

1. **Start with Android** - Easier setup, no Mac required
2. **Test early and often** - Don't wait until you're ready to submit
3. **Plan for review** - App Store reviews can take 1-5 days
4. **Budget for certificates** - iOS requires $99/year developer account
5. **Monitor crash reports** - Both platforms provide analytics tools

---

Need help? Check the Capacitor community forums or Discord! 🚀
