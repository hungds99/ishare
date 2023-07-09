'use client';

import { useAuthenticator } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function withAuth(Component: any) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();

    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    useEffect(() => {
      console.log('authStatus', authStatus);
      if (authStatus !== 'authenticated' && authStatus !== 'configuring') {
        router.push('/auth');
      }
    }, [authStatus, router]);

    if (authStatus === 'configuring') return null;

    return <>{authStatus === 'authenticated' ? <Component {...props} /> : null}</>;
  };
}
