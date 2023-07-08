import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1> Share your images </h1>
        <Link href='/sign-in'>Go to sign in</Link>
      </div>
    </main>
  );
}
