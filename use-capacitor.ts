import { useState, useEffect } from 'react';
import { isNative, getPlatform } from '@/lib/capacitor';

interface UseCapacitorReturn {
  isNative: boolean;
  platform: string;
  isIOS: boolean;
  isAndroid: boolean;
}

export function useCapacitor(): UseCapacitorReturn {
  const [state, setState] = useState<UseCapacitorReturn>({
    isNative: false,
    platform: 'web',
    isIOS: false,
    isAndroid: false,
  });

  useEffect(() => {
    const native = isNative();
    const platform = getPlatform();

    setState({
      isNative: native,
      platform,
      isIOS: platform === 'ios',
      isAndroid: platform === 'android',
    });
  }, []);

  return state;
}
