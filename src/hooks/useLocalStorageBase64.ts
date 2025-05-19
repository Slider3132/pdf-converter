import { useState } from 'react';

export const useLocalStorageBase64 = (key: string) => {
  const [stored, setStored] = useState<string[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const item = localStorage.getItem(key);
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
      localStorage.setItem(key, JSON.stringify(updated));
    } catch (e) {
      console.error('set localStorage error', e);
    }
  };

  return [stored, addBase64] as const;
};
