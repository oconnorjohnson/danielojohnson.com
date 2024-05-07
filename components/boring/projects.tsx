import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="w-full border-b border-gray-400" />
      <div className="py-12 w-full " />
      <h1
        id="projects"
        className="flex flex-col justify-center font-bold text-2xl lg:text-4xl"
      >
        Projects
      </h1>
      <h3 className="text-lg pb-2 pt-1">
        A more or less reverse-chronological list of my projects, with links to
        their GitHub repos {"/"} live sites.
      </h3>
      <div className="py-2" />
      <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
        <div className="w-1/4 lg:w-2/3  border-t border-gray-400" />
        <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
          <h2 className="font-semibold text-xl pb-2 text-blue-500">
            babylon.legal {"(WIP)"}
          </h2>
          <h3 className="font-light text-lg pb-2">
            Integrated case management for every agency of the criminal justice
            system
          </h3>
          <p className="text-gray-300 pb-2">
            A suite of interconnected management tools designed to streamline
            interdepartmental communications, data transfer, and data integrity
            across the criminal justice system.
          </p>
          <Link
            href="https://babylon.legal"
            className="text-blue-400 hover:underline"
          >
            About & Waitlist
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
        <div className="w-1/4 lg:w-2/3 border-t border-gray-400" />
        <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
          <h2 className="font-semibold text-xl pb-2 text-blue-500">
            Defeat-The-Primeagen {"(WIP)"}
          </h2>
          <h3 className="font-light text-lg pb-2">EdgeDB Hackathon Entry</h3>
          <p className="text-gray-300 pb-2">
            A 2D HTML game in which you&apos;re tasked with defending your
            database from legendary backend engineer, The Primeagen, who is
            DDOS&apos;ing your service, threatening your company with financial
            ruin from a hefty serverless compute bill.
          </p>
          <Link
            href="https://github.com/oconnorjohnson/defeat-the-primeagen"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
        <div className="w-1/4 lg:w-2/3  border-t border-gray-400" />
        <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
          <h2 className="font-semibold text-xl pb-2 text-blue-500">
            danielojohnson.com
          </h2>
          <h3 className="font-light text-lg pb-2">
            Multi-Experience Personal Portfolio
          </h3>
          <p className="text-gray-300 pb-2">
            My latest portfolio with multiple experiences, including a faux IDE
            & a throwback to 2000&apos;s-era pop-ups.
          </p>
          <Link
            href="https://github.com/oconnorjohnson/danielojohnson.com"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
        <div className="w-1/4 lg:w-2/3 border-t border-gray-400" />
        <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
          <h2 className="font-semibold text-xl pb-2 text-blue-500">
            Milli-Agent {"(WIP)"}
          </h2>
          <h3 className="font-light text-lg pb-2">
            Personal Transcription Agent
          </h3>
          <p className="text-gray-300 pb-2">
            TV writing assistant that transcribes, analyzes and tracks 5-10 hour
            brainstorming sessions between myself and my writing partner.
          </p>
          <Link
            href="https://github.com/oconnorjohnson/milli-agent"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
        <div className="w-1/4 lg:w-2/3  border-t border-gray-400" />
        <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
          <h2 className="font-semibold text-xl pb-2 text-blue-500">
            yolopublicdefendercares.org
          </h2>
          <h3 className="font-light text-lg pb-2">
            Asset Acquisition & Distribution Management Platform
          </h3>
          <p className="text-gray-300 pb-2">
            A financial and asset acquisition{"/"}distribution management
            platform for Yolo County&apos;s nonprofit, CARES. I moved our
            organization&apos;s entire tracking systems off of paper and into
            our custom application built with Next.js and a postgresql database.
          </p>
          <Link
            href="https://yolopublicdefendercares.org"
            className="text-blue-400 hover:underline"
          >
            Live Site
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full border-l-4 border-gray-400">
        <div className="w-1/4 lg:w-2/3 border-t border-gray-400" />
        <div className="flex flex-col border border-gray-400 rounded-bl-lg rounded-br-lg rounded-tr-lg px-6 py-4 mb-8">
          <h2 className="font-semibold text-xl pb-2 text-blue-500">PocketPR</h2>
          <h3 className="font-light text-lg pb-2">
            Automated PR for Content Creators
          </h3>
          <p className="text-gray-300 pb-2">
            A simple chatbot enhanced with embedding creation to enable
            context-aware retrieval and interaction based on a user&apos;s
            YouTube videos and their comments.
          </p>
          <Link
            href="https://pocketpr.app"
            className="text-blue-400 hover:underline"
          >
            Live Site
          </Link>
        </div>
      </div>
      <div className="py-6 w-full border-b border-gray-400" />
    </>
  );
}
