import Link from "next/link";
import Image from "next/image";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col py-10 px-6 w-screen h-screen">
        <h2 className="font-bold pb-1">
          Daniel O&apos;Connor Johnson | Builder
        </h2>

        <h3 className="font-light text-lg lg:text-xl">
          So you&apos;ve been tasked with learning about me...
        </h3>
        <div className="py-2 border-b border-gray-400 sm:w-3/4 md:w-1/2 lg:w-1/3" />
        <h1 className="font-black text-3xl lg:font-bold lg:text-6xl pt-4">
          Choose Your Experience {":)"}
        </h1>
        <ol className="list-decimal text-xl px-6 pt-4">
          <li>
            <Link className="hover:text-yellow-400 underline" href="/boring">
              Plain Text
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400 underline" href="/ide">
              Code Editor
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400 underline" href="/future">
              Futuristic
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400 underline" href="/2000s">
              2000&apos;s
            </Link>
          </li>
        </ol>
      </div>
    </>
  );
}
