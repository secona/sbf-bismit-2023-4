import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full mt-14 justify-center mx-auto max-w-4xl flex flex-col gap-3">
      <div className="flex justify-center items-center gap-2 mb-5">
        <Link href="/level" className="border-2 border-white/10 py-2 px-3 rounded-lg flex flex-col items-center justify-center">Back</Link>
        <p className="text-7xl font-clash-display text-center">Easy Levels</p>
      </div>
      <div className="bg-green-600 rounded-lg py-2 px-5 hover:scale-105 duration-75">
        <p className="text-lg uppercase font-bold">Input Data</p>
        <p className="text-sm">Level: Easy</p>
      </div>
      <div className="bg-green-600 rounded-lg py-2 px-5 hover:scale-105 duration-75">
        <p className="text-lg uppercase font-bold">Print Text</p>
        <p className="text-sm">Level: Easy</p>
      </div>
      <div className="bg-green-600 rounded-lg py-2 px-5 hover:scale-105 duration-75">
        <p className="text-lg uppercase font-bold">Binary Numbers</p>
        <p className="text-sm">Level: Easy</p>
      </div>
    </div>
  )
}