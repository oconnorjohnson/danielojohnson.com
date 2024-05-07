import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col py-10 px-6 w-screen h-screen lg:justify-center">
        <h3 className="font-semilight text-md lg:text-xl">
          So you&apos;ve been tasked with learning about me...
        </h3>
        <div className="py-2" />
        <h1 className="font-bold text-3xl lg:text-6xl">
          Choose Your Experience {":)"}
        </h1>

        <div className="flex flex-col lg:flex-row lg:gap-x-4 pt-8">
          {/* Plain Text Card*/}
          <Link
            href="/boring"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-2 h-[250px]"
          >
            Simple Portfolio
          </Link>
          {/* Code Editor Card */}
          <Link
            href="/ide"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-2 h-[250px]"
          >
            Code Editor Portfolio
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
          {/* Code Editor Card */}
          <Link
            href="/ide"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-2 h-[250px]"
          >
            Futuristic Portfolio
          </Link>
          {/* Code Editor Card */}
          <Link
            href="/ide"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md my-2 h-[250px]"
          >
            2000&apos;s Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
