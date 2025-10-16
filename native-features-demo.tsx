'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCapacitor } from '@/hooks/use-capacitor';
import { scheduleTaskReminder } from '@/lib/capacitor';
import { toast } from 'sonner';
import { Bell, Smartphone, Calendar } from 'lucide-react';

export function NativeFeaturesDemo(): React.ReactElement {
  const { isNative, platform, isIOS, isAndroid } = useCapacitor();
  const [loading, setLoading] = useState<boolean>(false);

  const handleScheduleReminder = async (): Promise<void> => {
    setLoading(true);
    try {
      // Schedule a notification 10 seconds from now
      const scheduledTime = new Date();
      scheduledTime.setSeconds(scheduledTime.getSeconds() + 10);

      await scheduleTaskReminder('Complete your daily task!', scheduledTime);
      toast.success('Reminder scheduled for 10 seconds from now!');
    } catch (error) {
      toast.error('Failed to schedule reminder');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="h-5 w-5" />
          Native Features
        </CardTitle>
        <CardDescription>
          {isNative
            ? `Running on ${platform} ${isIOS ? '(iOS)' : isAndroid ? '(Android)' : ''}`
            : 'Running in web browser'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isNative ? (
          <>
            <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-400">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="font-medium">Native mode active!</span>
              </div>
              <p className="mt-1 text-xs">
                You have access to push notifications, local storage, and device features.
              </p>
            </div>

            <Button
              onClick={handleScheduleReminder}
              disabled={loading}
              className="w-full"
              variant="default"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {loading ? 'Scheduling...' : 'Schedule Test Reminder'}
            </Button>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">
                Available Features:
              </h4>
              <ul className="list-inside list-disc space-y-1">
                <li>Push Notifications</li>
                <li>Local Notifications</li>
                <li>Background App Refresh</li>
                <li>Native Navigation</li>
                <li>Offline Storage</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
            <div className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              <span className="font-medium">Web browser mode</span>
            </div>
            <p className="mt-1 text-xs">
              Install the native app to unlock push notifications and offline features.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
