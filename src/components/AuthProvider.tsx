"use client";

import { NeonAuthUIProvider } from '@neondatabase/auth/react';
import { ReactNode } from 'react';
import { authClient } from '@/lib/auth';

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <NeonAuthUIProvider authClient={authClient} redirectTo="/" emailOTP>
      {children}
    </NeonAuthUIProvider>
  );
}
