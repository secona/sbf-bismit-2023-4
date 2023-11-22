export default function Login() {
  return (
    <div className="mx-auto min-h-screen flex flex-col gap-2 items-center justify-center w-full">
      <form className="border-white/10 border-2 border-solid rounded-lg py-12 px-20 flex flex-col gap-2 justify-center">
        <p className="text-7xl font-clash-display mb-12 text-center">Login</p>
        <input
          className="rounded-lg py-2 px-3 text-black"
          placeholder="Email"
        />
        <input
          className="rounded-lg py-2 px-3 text-black"
          placeholder="Password"
        />
        <button className="bg-blue-600 py-2 px-6 rounded-lg">Log In</button>
      </form>
    </div>
  );
}
