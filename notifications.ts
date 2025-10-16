'use client';

import { LocalNotifications } from '@capacitor/local-notifications';
import type { ScheduleOptions } from '@capacitor/local-notifications';

export class NotificationService {
  static async requestPermission(): Promise<boolean> {
    try {
      const result = await LocalNotifications.requestPermissions();
      return result.display === 'granted';
    } catch (error) {
      console.error('Permission request failed:', error);
      return false;
    }
  }

  static async scheduleTaskReminder(title: string, body: string, delayHours: number = 24): Promise<void> {
    try {
      const hasPermission = await this.requestPermission();
      if (!hasPermission) {
        console.log('Notification permission denied');
        return;
      }

      const notificationTime = new Date();
      notificationTime.setHours(notificationTime.getHours() + delayHours);

      const options: ScheduleOptions = {
        notifications: [
          {
            title,
            body,
            id: Math.floor(Math.random() * 1000000),
            schedule: { at: notificationTime },
            sound: undefined,
            attachments: undefined,
            actionTypeId: '',
            extra: null,
          },
        ],
      };

      await LocalNotifications.schedule(options);
      console.log('Notification scheduled successfully');
    } catch (error) {
      console.error('Failed to schedule notification:', error);
    }
  }

  static async scheduleDailyReminder(completedSteps: number, totalSteps: number): Promise<void> {
    const remaining = totalSteps - completedSteps;
    
    if (remaining > 0) {
      await this.scheduleTaskReminder(
        'Complete your PathFinder tasks! 🎯',
        `You have ${remaining} task${remaining > 1 ? 's' : ''} remaining. Keep building your path to success!`,
        24
      );
    }
  }

  static async cancelAllNotifications(): Promise<void> {
    try {
      await LocalNotifications.cancel({ notifications: [] });
    } catch (error) {
      console.error('Failed to cancel notifications:', error);
    }
  }

  static async checkPermissions(): Promise<boolean> {
    try {
      const result = await LocalNotifications.checkPermissions();
      return result.display === 'granted';
    } catch (error) {
      console.error('Permission check failed:', error);
      return false;
    }
  }
}
