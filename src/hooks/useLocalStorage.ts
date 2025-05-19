import { useState } from 'react';

export const useLocalStorageArray = (
  key: string,
  initialValue: string[] = []
) => {
  const [storedValue, setStoredValue] = useState<string[]>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('localStorage get error:', error);
      return initialValue;
    }
  });

  const addValue = (value: string) => {
    try {
      const updated = [value, ...storedValue];
      setStoredValue(updated);
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(updated));
      }
    } catch (error) {
      console.error('localStorage set error:', error);
    }
  };

  return [storedValue, addValue] as const;
};
