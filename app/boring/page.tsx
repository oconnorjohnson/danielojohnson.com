import Link from "next/link";
import { MdArrowLeft } from "react-icons/md";

export default function BoringPage() {
  return (
    <>
      <div id="home" className="flex flex-col w-screen h-screen">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col xl:flex-row justify-between items-center align-center w-1/2 pt-20 pb-24">
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
              <a className="hover:underline" href="#projects">
                Projects
              </a>
              <a className="hover:underline" href="#skills">
                Skills & Interests
              </a>
              <a className="hover:underline" href="#blogs">
                Blogs
              </a>
              <a className="hover:underline" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div className="py-6 w-full border-b border-gray-400" />
          <div className="py-12 w-full " />
          <h1
            id="projects"
            className="flex flex-col justify-center font-bold text-2xl lg:text-4xl"
          >
            Projects
          </h1>
          <div className="py-2" />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2 pt-12">
            <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
              <div className="w-1/4 lg:w-2/3  border-t border-gray-400" />
              <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
                <h2 className="font-semibold text-xl">
                  babylon.legal {"(WIP)"}
                </h2>
                <h3 className="font-light text-lg">
                  Integrated case management for every agency of the criminal
                  justice system
                </h3>
                <p className="text-gray-400">
                  A suite of interconnected management tools designed to
                  streamline interdepartmental communications, data transfer,
                  and data integrity across the criminal justice system.
                </p>
                <Link
                  href="https://babylon.legal"
                  className="text-blue-400 underline"
                >
                  About & Waitlist
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
              <div className="w-1/4 lg:w-2/3 border-t border-gray-400" />
              <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
                <h2 className="font-semibold text-xl">
                  Defeat-The-Primeagen {"(WIP)"}
                </h2>
                <h3 className="font-light text-lg">EdgeDB Hackathon Entry</h3>
                <p className="text-gray-400">
                  A 2D HTML game in which you&apos;re tasked with defending your
                  database from legendary backend engineer, The Primeagen, who
                  is DDOS&apos;ing your service, threatening your company with
                  financial ruin from a hefty serverless compute bill.
                </p>
                <Link
                  href="https://github.com/oconnorjohnson/defeat-the-primeagen"
                  className="text-blue-400 underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
              <div className="w-1/4 lg:w-2/3  border-t border-gray-400" />
              <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
                <h2 className="font-semibold text-xl">danielojohnson.com</h2>
                <h3 className="font-light text-lg">
                  Multi-Experience Personal Portfolio
                </h3>
                <p className="text-gray-400">
                  My latest portfolio with multiple experiences, including a
                  faux IDE & a throwback to 2000&apos;s-era pop-ups.
                </p>
                <Link
                  href="https://github.com/oconnorjohnson/danielojohnson.com"
                  className="text-blue-400 underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
              <div className="w-1/4 lg:w-2/3 border-t border-gray-400" />
              <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
                <h2 className="font-semibold text-xl">Milli-Agent {"(WIP)"}</h2>
                <h3 className="font-light text-lg">
                  Personal Transcription Agent
                </h3>
                <p className="text-gray-400">
                  TV writing assistant that transcribes, analyzes and tracks
                  5-10 hour brainstorming sessions between myself and my writing
                  partner.
                </p>
                <Link
                  href="https://github.com/oconnorjohnson/milli-agent"
                  className="text-blue-400 underline"
                >
                  GitHub
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
              <div className="w-1/4 lg:w-2/3  border-t border-gray-400" />
              <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
                <h2 className="font-semibold text-xl">
                  yolopublicdefendercares.org
                </h2>
                <h3 className="font-light text-lg">
                  Asset Acquisition & Distribution Management Platform
                </h3>
                <p className="text-gray-400">
                  A financial and asset acquisition{"/"}distribution management
                  platform for Yolo County&apos;s nonprofit, CARES. I moved our
                  organization&apos;s entire tracking systems off of paper and
                  into our custom application built with Next.js and a
                  postgresql database.
                </p>
                <Link
                  href="https://yolopublicdefendercares.org"
                  className="text-blue-400 underline"
                >
                  Live Site
                </Link>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
              <div className="w-1/4 lg:w-2/3 border-t border-gray-400" />
              <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
                <h2 className="font-semibold text-xl">PocketPR</h2>
                <h3 className="font-light text-lg">
                  Automated PR for Content Creators
                </h3>
                <p className="text-gray-400">
                  A simple chatbot enhanced with embedding creation to enable
                  context-aware retrieval and interaction based on a user&apos;s
                  YouTube videos and their comments.
                </p>
                <Link
                  href="https://pocketpr.app"
                  className="text-blue-400 underline"
                >
                  Live Site
                </Link>
              </div>
            </div>
          </div>
          <div className="py-6 w-full border-b border-gray-400" />
          <div className="py-12 w-full " />
          <h1
            id="skills"
            className="flex flex-col justify-center font-bold text-2xl lg:text-4xl h-screen"
          >
            Skills & Interests
          </h1>
          <div className="py-2" />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            stuffr
          </div>
          <div className="py-6 w-full border-b border-gray-400" />
          <div className="py-12 w-full " />
          <h1
            id="blogs"
            className="flex flex-col justify-center font-bold text-2xl lg:text-4xl h-screen"
          >
            Blogs
          </h1>
          <div className="py-2" />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            stuffr
          </div>
          <div className="py-6 w-full border-b border-gray-400" />
          <div className="py-12 w-full " />
          <h1
            id="contact"
            className="flex flex-col justify-center font-bold text-2xl lg:text-4xl h-screen"
          >
            Contact Me
          </h1>
          <div className="py-6 w-full border-b border-gray-400" />
          <div className="py-12 w-full " />
          <a href="#home">Back to Top</a>
          <div className="py-12" />
        </div>
      </div>
    </>
  );
}

// Daniel Johnson - Software Engineer
// Typescript, Python, Swift
// React, Next.js, Express
// Jotai, Zhustand, Redux
// SQL, KV, Vectors
// I can learn anything fast
// writing, filmmaking, woodworking
// tacos, eggs & bacon, grapefruit
// Shameless, MonK, Mad Men, The Office
// Gipsy Kings, Drakeo The Ruler, Johnny Cash, Future
