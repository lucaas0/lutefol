'use client';

import { SessionProvider } from 'next-auth/react'

const AuthSessionProvider = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider refetchInterval={4 * 60}>{children}</SessionProvider>
}

export default AuthSessionProvider;
