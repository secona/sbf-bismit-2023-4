export default function AboutUs() {
  return (
    <div className="mx-auto min-h-screen flex flex-col gap-12 items-center justify-center w-full max-w-3xl">
      <div>
        <p className="text-4xl text-center mb-5">Welcome to Pythern</p>
        <p>
          We are a group of computer science students, passionate about creating
          an interactive coding learning experience. With a focus on Python
          programming, we have crafted this platform as a space to share
          knowledge, challenge ourselves, and develop programming skills.
        </p>
      </div>
      <div>
        <p className="text-4xl text-center mb-5">Meet the Team</p>
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg py-2 px-5 bg-green-600 text-center">
            <p>Ananda Dwi Hanifa</p>
            <p className="text-xs">UI/UX Designer</p>
          </div>
          <div className="rounded-lg py-2 px-5 bg-green-600 text-center">
            <p>Ananda Dwi Hanifa</p>
            <p className="text-xs">UI/UX Designer</p>
          </div>
          <div className="rounded-lg py-2 px-5 bg-green-600 text-center">
            <p>Felita Zahra D</p>
            <p className="text-xs">UI/UX Designer</p>
          </div>
          <div className="rounded-lg py-2 px-5 bg-green-600 text-center">
            <p>Muhammad Vito Secona</p>
            <p className="text-xs">Web Developer</p>
          </div>
          <div className="rounded-lg py-2 px-5 bg-green-600 text-center">
            <p>Dicky Bayu Sadewo</p>
            <p className="text-xs">Web Developer</p>
          </div>
          <div className="rounded-lg py-2 px-5 bg-green-600 text-center">
            <p>Deanita Sekar Kinasih</p>
            <p className="text-xs">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
