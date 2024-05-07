import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col py-10 px-6 w-screen h-screen lg:justify-center">
        <h3 className="font-light text-lg lg:text-xl">
          So you&apos;ve been tasked with learning about me...
        </h3>
        <div className="py-2 border-b border-gray-400 sm:w-3/4 md:w-1/2 lg:w-1/3" />
        <h1 className="font-black text-3xl lg:font-bold lg:text-6xl pt-4">
          Choose Your Experience {":)"}
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-x-8 pt-8">
          {/* Plain Text Card*/}
          <Link
            href="/boring"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-4 h-[250px]"
          >
            Simple Portfolio
          </Link>
          {/* Code Editor Card */}
          <div className="block flex flex-grow w-full bg-gray-400 text-black px-2 py-1 rounded-md my-4 h-[250px] lg:hidden">
            Code Editor Portfolio - Available on Laptop/Desktop
          </div>
          <Link
            href="/ide"
            className="hidden lg:flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-4 h-[250px]"
          >
            Code Editor Portfolio
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          {/* Code Editor Card */}
          <Link
            href="/ide"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-4 h-[250px]"
          >
            Futuristic Portfolio
          </Link>
          {/* Code Editor Card */}
          <Link
            href="/ide"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-4 h-[250px]"
          >
            2000&apos;s Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
