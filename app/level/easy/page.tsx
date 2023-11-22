export default function Page() {
  return (
    <div className="min-h-screen w-full justify-center mx-auto max-w-4xl flex flex-col gap-3">
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