import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.growthpilot.app',
  appName: 'GrowthPilot',
  webDir: 'out', // Change to 'out' when using static export, or use '.next/standalone' for server
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    // For development, you can point to your dev server
    // url: 'http://localhost:3000',
    // cleartext: true,
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#488AFF',
    },
  },
};

export default config;
