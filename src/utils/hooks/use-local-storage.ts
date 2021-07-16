import { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";

export function useLocalStorage<T = any>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const storageVal = localStorage.getItem(key);
      if (storageVal) return JSON.parse(storageVal);
      else return initialValue;
    } catch (e: unknown) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const newValue = JSON.stringify(value);
      localStorage.setItem(key, newValue);
    } catch (e: unknown) {}
  }, [value, key]);

  return [value, setValue];
}
