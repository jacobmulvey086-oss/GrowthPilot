'use client';

import { useEffect } from 'react';
import { initializeCapacitor } from '@/lib/capacitor';

export default function CapacitorInitializer(): null {
  useEffect(() => {
    initializeCapacitor().catch((error) => {
      console.error('Failed to initialize Capacitor:', error);
    });
  }, []);

  return null;
}
