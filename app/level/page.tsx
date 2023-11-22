import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center min-h-screen gap-7">
      <div className="flex justify-center items-center gap-2 mb-2">
        <Link
          href="/level"
          className="border-2 border-white/10 py-2 px-3 rounded-lg flex flex-col items-center justify-center"
        >
          Back
        </Link>
        <p className="text-7xl font-clash-display text-center">Choose Difficulty</p>
      </div>
      <div className="flex flex-col w-full items-center gap-2">
        <Link
          className="w-96 py-2 bg-green-600 rounded-lg hover:scale-105 duration-75 text-center"
          href="/level/easy"
        >
          Easy
        </Link>
        <Link
          className="w-96 py-2 bg-red-600 rounded-lg hover:scale-105 duration-75 text-center"
          href="/level/medium"
        >
          Medium
        </Link>
      </div>
    </div>
  );
}
