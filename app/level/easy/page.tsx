import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen w-full justify-center mx-auto max-w-4xl flex flex-col gap-3">
      <div className="flex justify-center gap-2 mb-5">
        <Link href="/level" className="border-2 border-white/10 px-2 rounded-lg flex flex-col items-center justify-center">Back</Link>
        <p className="text-4xl text-center">Easy Levels</p>
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