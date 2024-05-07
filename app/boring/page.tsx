import Link from "next/link";

export default function BoringPage() {
  return (
    <>
      <div className="flex flex-col w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1
            id="home"
            className="font-black text-3xl lg:font-thin lg:text-5xl pt-8 pb-12"
          >
            Daniel O&apos;Connor Johnson
          </h1>

          <h1
            id="projects"
            className="flex flex-col justify-center font-bold text-2xl lg:text-4xl"
          >
            Projects
          </h1>
          <div className="py-2" />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            <div className="flex flex-row justify-between w-full border-l-4 border-gray-400 py-4"></div>
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
          <div className="py-12" />
          <h1 className="flex flex-col justify-center font-bold text-2xl lg:text-4xl">
            Skills & Interests
          </h1>
          <div className="py-2" />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            stuffr
          </div>
          <div className="py-12" />
          <h1
            id="contact"
            className="flex flex-col justify-center font-bold text-2xl lg:text-4xl"
          >
            Contact Me
          </h1>
          <div className="py-2" />
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
