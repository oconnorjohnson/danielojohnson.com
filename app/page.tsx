import Link from "next/link";

export const runtime = "edge";

export default function RootPage() {
  return (
    <>
      <div className="flex flex-col py-10 px-6 w-screen h-screen">
        <h2 className="font-bold pb-1">
          Daniel O&apos;Connor Johnson | Builder
        </h2>

        <h3 className="font-light text-xl lg:text-2xl ">
          So you&apos;ve been tasked with learning about me...
        </h3>

        <h1 className="font-black text-3xl lg:font-bold lg:text-6xl pt-4 pb-6">
          <span className="font-bold border-b border-gray-400 ">
            Choose Your Experience
          </span>
        </h1>
        <ol className="list-decimal text-xl px-6 pt-4">
          <li>
            <Link className="hover:text-yellow-400 underline" href="/boring">
              Plain Text
            </Link>
          </li>
          <div className="hidden lg:block">
            <li>
              <Link className="hover:text-yellow-400 underline" href="/ide">
                Code Editor
              </Link>
            </li>
          </div>
          <div className="lg:hidden">
            <li>
              <span className="underline pr-2">Code Editor </span> {"("}Not
              available on mobile{")"}
            </li>
          </div>
          {/* <li>
            <Link className="hover:text-yellow-400 underline" href="/future">
              Futuristic
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-400 underline" href="/2000s">
              2000&apos;s
            </Link>
          </li> */}
        </ol>
      </div>
    </>
  );
}
