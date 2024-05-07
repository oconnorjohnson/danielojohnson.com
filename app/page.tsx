import Link from "next/link";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col py-10 px-6 w-screen h-screen">
        <h3 className="font-semilight text-md lg:text-xl">
          So you&apos;ve been tasked with learning about me...
        </h3>
        <h1 className="font-bold text-3xl lg:text-6xl">
          Choose Your Experience {":)"}
        </h1>
        {/* Code Editor Card */}
        <div className="flex flex-col lg:flex-row lg:gap-x-4">
          <Link
            href="/ide"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md h-[250px] my-4"
          >
            Code Editor
          </Link>
          <Link
            href="/ide"
            className="flex flex-grow w-full bg-white text-black px-2 py-1 rounded-md h-[250px] my-4"
          >
            Code Editor
          </Link>
        </div>
      </div>
    </>
  );
}
