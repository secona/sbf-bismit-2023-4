import Link from "next/link";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  preload: false,
  subsets: ["latin"],
});

const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: "./ClashDisplay-Medium.woff2",
});

export const metadata = {
  title: "Pythern",
  description: "Python Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} ${spaceGrotesk.variable} min-h-screen flex flex-col relative`}
      >
        <nav className="flex flex-row justify-between items-center fixed top-0 w-full bg-transparent backdrop-blur px-16 py-5 border-b-2 border-white/10 border-solid">
          <Link href="/">
            <h1 className="text-5xl cursor-pointer">
              <span className="border-[#FFA364] text-[#FFA364]">Pyt</span>
              <span className="border-[#FFEBD2] text-[#FFEBD2]">h</span>
              <span className="border-[#AF4F41] text-[#AF4F41]">ern</span>
            </h1>
          </Link>
          <div className="flex flex-row gap-8 items-center">
            <Link className="hover:border-b-2" href="/about-us">
              About Us
            </Link>
            <Link className="hover:border-b-2" href="/login">
              Log In
            </Link>
            <Link className="hover:border-b-2" href="/signup">
              Sign Up
            </Link>
          </div>
        </nav>
        {children}
        <div className="absolute bottom-0 w-full border-t-2 border-white/10 border-solid p-2 bg-transparent">
          <p>Pythern - 2023</p>
        </div>
      </body>
    </html>
  );
}
