import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';

export const isNative = (): boolean => {
  return Capacitor.isNativePlatform();
};

export const getPlatform = (): string => {
  return Capacitor.getPlatform();
};

export const initializeCapacitor = async (): Promise<void> => {
  if (!isNative()) {
    console.log('Running in web mode');
    return;
  }

  console.log(`Running on native platform: ${getPlatform()}`);

  // Initialize push notifications
  await initializePushNotifications();

  // Initialize local notifications
  await initializeLocalNotifications();

  // Add app state change listener
  CapacitorApp.addListener('appStateChange', ({ isActive }) => {
    console.log('App state changed. Is active?', isActive);
  });

  // Add back button listener for Android
  if (getPlatform() === 'android') {
    CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });
  }
};

const initializePushNotifications = async (): Promise<void> => {
  try {
    // Check permissions
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      console.log('Push notification permission not granted');
      return;
    }

    // Register with Apple / Google to receive push via APNS/FCM
    await PushNotifications.register();

    // Listen for registration
    PushNotifications.addListener('registration', (token) => {
      console.log('Push registration success, token:', token.value);
      // TODO: Send token to your backend server
    });

    PushNotifications.addListener('registrationError', (error) => {
      console.error('Error on registration:', error);
    });

    // Listen for push notifications
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Push notification received:', notification);
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('Push notification action performed:', notification);
    });
  } catch (error) {
    console.error('Error initializing push notifications:', error);
  }
};

const initializeLocalNotifications = async (): Promise<void> => {
  try {
    // Check permissions
    let permStatus = await LocalNotifications.checkPermissions();

    if (permStatus.display === 'prompt') {
      permStatus = await LocalNotifications.requestPermissions();
    }

    if (permStatus.display !== 'granted') {
      console.log('Local notification permission not granted');
      return;
    }

    // Listen for local notification actions
    LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
      console.log('Local notification action performed:', notification);
    });
  } catch (error) {
    console.error('Error initializing local notifications:', error);
  }
};

// Helper function to schedule task reminders
export const scheduleTaskReminder = async (
  taskTitle: string,
  scheduledTime: Date
): Promise<void> => {
  if (!isNative()) {
    console.log('Local notifications only available in native mode');
    return;
  }

  try {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'GrowthPilot Reminder',
          body: `Don't forget to complete: ${taskTitle}`,
          id: Math.floor(Math.random() * 1000000),
          schedule: { at: scheduledTime },
          sound: 'default',
          smallIcon: 'ic_stat_icon_config_sample',
          iconColor: '#488AFF',
        },
      ],
    });
    console.log('Task reminder scheduled');
  } catch (error) {
    console.error('Error scheduling task reminder:', error);
  }
};
