'use client';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthPage() {
  const router = useRouter();

  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    if (authStatus === 'authenticated') {
      router.push('/');
    }
  }, [authStatus, router]);

  if (authStatus === 'configuring') return null;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Authenticator />
    </div>
  );
}
