import Link from "next/link";
import { MdArrowLeft } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-thin text-xl lg:text-4xl pt-8 ">
          Daniel O&apos;Connor Johnson
        </h1>
        <Link
          className="flex flex-row justify-around align-center items-center text-center py-2 px-4 bg-gray-400  rounded-lg text-sm lg:text-lg text-gray-950 mt-6"
          href="/"
        >
          <MdArrowLeft className="h-6 w-6 pr-2" />
          Choose a more interesting experience
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center pt-12">
        <h1
          id="index"
          className="flex flex-col justify-center font-bold text-lg lg:text-xl"
        >
          Navigation
        </h1>
        <div className="py-2" />
        <a className="hover:underline text-blue-400" href="#projects">
          Projects
        </a>
        <a className="hover:underline text-blue-400" href="#skills">
          Skills & Interests
        </a>
        <a className="hover:underline text-blue-400" href="#blogs">
          Blogs
        </a>
        <a className="hover:underline text-blue-400" href="#contact">
          Contact
        </a>
      </div>
    </>
  );
}
