'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import * as React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function NextThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
