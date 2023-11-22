import Link from 'next/link';

export default function Page() {
  return (
    <div className="mx-auto min-h-screen flex flex-col gap-5 items-center justify-center w-full">
      <h1 className="text-7xl font-clash-display">Welcome to Pythern</h1>
      <p className="text-white text-center max-w-lg">
        Embark on the Python Programming Challenge with Pythern: Elevate your
        coding skills, overcome hurdles, and unlock the world of possibilities
        in every line of code!
      </p>
      <Link className="flex rounded-lg bg-green-600 py-2 px-5" href="/level">
        Begin Challenge!!!
      </Link>
    </div>
  );
}
