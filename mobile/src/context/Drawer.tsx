import React, { createContext, useContext, useState } from 'react';

interface DrawerValue {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const DrawerCtx = createContext<DrawerValue | null>(null);

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <DrawerCtx.Provider value={{ open, setOpen }}>{children}</DrawerCtx.Provider>;
}

export function useDrawer(): DrawerValue {
  const ctx = useContext(DrawerCtx);
  if (!ctx) throw new Error('useDrawer must be used within DrawerProvider');
  return ctx;
}
