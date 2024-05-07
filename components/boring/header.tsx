import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center align-center w-3/4 lg:w-1/2 pt-20 pb-12 ">
      <div className="flex flex-col items-start justify-center">
        <h1 className="font-thin text-2xl lg:text-4xl pt-8 ">
          Daniel O&apos;Connor Johnson
        </h1>
        <Link
          className="pl-2 flex flex-row justify-around align-center items-center text-center px-2 py-1 lg:py-2 lg:px-4 bg-gray-800 font-semibold rounded-lg text-sm lg:text-lg text-gray-200 border border-gray-400 my-4 lg:mt-6 hover:text-blue-500 transition-all"
          href="/"
        >
          Choose a more interesting experience
        </Link>
      </div>
      <div className="flex flex-col items-center xl:items-end pt-6 text-lg">
        <h1 id="index" className="flex flex-col justify-center font-bold ">
          Navigation
        </h1>
        <a className="hover:underline text-blue-400" href="#projects">
          Projects
        </a>
        <a className="hover:underline text-blue-400" href="#skills">
          Skills
        </a>
        <a className="hover:underline text-blue-400" href="#blogs">
          Blogs
        </a>
        <a className="hover:underline text-blue-400" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}
