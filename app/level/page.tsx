import Link from 'next/link';

export default function Page() {
  return (
      <div className="flex flex-col justify-center min-h-screen gap-12">
        <p className="text-center text-7xl">
          Choose Difficulty
        </p>
        <div className="flex flex-col w-full items-center gap-2">
          <Link className="w-96 py-2 bg-green-600 rounded-lg hover:scale-105 duration-75 text-center" href="/level/easy">
            Easy
          </Link>
          <Link className="w-96 py-2 bg-red-600 rounded-lg hover:scale-105 duration-75 text-center" href="/level/medium">
            Medium
          </Link>
        </div>
      </div>
  );
}
