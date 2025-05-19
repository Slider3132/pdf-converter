import { useState } from 'react';

export const useLocalStorageBase64 = (key: string) => {
  const [stored, setStored] = useState<string[]>(() => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) return [];
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      console.error('get localStorage error', e);
      return [];
    }
  });

  const addBase64 = (base64: string) => {
    const updated = [base64, ...stored];
    setStored(updated);

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(updated));
      }
    } catch (e) {
      console.error('set localStorage error', e);
    }
  };

  return [stored, addBase64] as const;
};
