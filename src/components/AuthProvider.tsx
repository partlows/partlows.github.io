"use client";

import { createAuthClient } from '@neondatabase/auth';
import { BetterAuthReactAdapter } from '@neondatabase/auth/react/adapters';
import { NeonAuthUIProvider } from '@neondatabase/auth/react';
import { ReactNode } from 'react';

const neonAuthUrl = process.env.NEXT_PUBLIC_NEON_AUTH_BASE_URL;

const authClient = createAuthClient(neonAuthUrl ?? '', {
  adapter: BetterAuthReactAdapter(),
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <NeonAuthUIProvider authClient={authClient} redirectTo="/" emailOTP>
      {children}
    </NeonAuthUIProvider>
  );
}
