'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  console.log('authprov')
  return <SessionProvider>{children}</SessionProvider>;
}
