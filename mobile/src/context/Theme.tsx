import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeColors, ThemeMode, darkColors, lightColors } from '../theme/tokens';

interface ThemeValue {
  mode: ThemeMode;
  colors: ThemeColors;
  toggle: () => void;
}

const ThemeCtx = createContext<ThemeValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    AsyncStorage.getItem('theme').then((v) => {
      if (v === 'dark' || v === 'light') setMode(v);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('theme', mode);
  }, [mode]);

  const value: ThemeValue = {
    mode,
    colors: mode === 'dark' ? darkColors : lightColors,
    toggle: () => setMode((m) => (m === 'dark' ? 'light' : 'dark')),
  };

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
