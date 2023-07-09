'use client';

import withAuth from '@/hoc/withAuth';

function Home() {
  return <h1>hello from home page</h1>;
}

export default withAuth(Home);
