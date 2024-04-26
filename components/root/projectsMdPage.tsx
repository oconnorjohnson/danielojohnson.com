import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MdOutlineClose } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
export default function Title() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full bg-gray-800 shadow-xl flex flex-row items-center justify-start pl-4 py-2 text-sm">
          <span className="hover:font-bold transition-all">
            danielojohnson.com
          </span>
          <span className="px-2">{">"}</span>
          <span className="hover:font-bold transition-all">app</span>
          <span className="px-2">{">"}</span>
          <span className="hover:font-bold transition-all">README</span>
          <span className="pl-2">{">"}</span>
          <Image
            alt="react file icon"
            src="/react.svg"
            width={30}
            height={30}
            className="px-1"
          />{" "}
          <span className="hover:font-bold transition-all">projects.md</span>
        </div>
        <ScrollArea className="h-[722px] w-[900px]">
          <div className="flex flex-cols-2 items-start justify-start px-4 py-2">
            <div className="flex flex-col pr-8 text-gray-500 items-end font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg  pt-2">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16</div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20</div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div>31</div>
              <div>32</div>
            </div>
            <div className="pt-2">
              {/* PERSON */}

              <h1 className="font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg ">
                <span className="font-bold" style={{ color: "#9cdcfe" }}>
                  # My Projects
                </span>
                <div className="pt-7" />
                <span className="font-bold" style={{ color: "#9cdcfe" }}>
                  ## CARES
                </span>
                <br />
                <span className="">
                  A financial and asset acquisition{"/"}distribution management
                  platform for Yolo County&apos;s nonprofit, CARES.
                </span>
                <br />
                <span className="text-yellow-300">
                  {"- ["}
                  <a
                    href="https://yolopublicdefendercares.org"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400"
                  >
                    Live Demo
                  </a>
                  {"]"}
                  {"("}
                  <a
                    href="https://yolopublicdefendercares.org"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline"
                  >
                    https://yolopublicdefendercares.org
                  </a>
                  {")"}
                </span>
                <div className="pt-7" />
                <span className="font-bold" style={{ color: "#9cdcfe" }}>
                  ## Milli-Agent {"(WIP)"}
                </span>
                <br />
                <span className="">
                  TV writing assistant that transcribes, analyzes and tracks
                  5-10 hour brainstorming sessions between myself and my writing
                  partner.
                </span>
                <br />
                <span className="text-yellow-300">
                  {"- ["}
                  <a
                    href="https://bootlegmilli.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400"
                  >
                    Live Demo
                  </a>
                  {"]"}
                  {"("}
                  <a
                    href="https://bootlegmilli.com"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline"
                  >
                    {"https://bootlegmilli.com"}
                  </a>
                  {")"}
                </span>
                <br />
                <span className="text-yellow-300">
                  {"- ["}
                  <a
                    href="https://github.com/oconnorjohnson/milli-agent"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400"
                  >
                    GitHub
                  </a>
                  {"]"}
                  {"("}
                  <a
                    href="https://github.com/oconnorjohnson/milli-agent"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline"
                  >
                    {"https://github.com/oconnorjohnson/milli-agent"}
                  </a>
                  {")"}
                </span>
                <div className="pt-7" />
                <span className="font-bold" style={{ color: "#9cdcfe" }}>
                  ## Babylon {"(WIP)"}
                </span>
                <br />
                <span className="">
                  Currently building Babylon to bring interconnected case
                  management systems to all agencies of the criminal justice
                  system.
                </span>
                <br />
                <span className="text-yellow-300">
                  {"- ["}
                  <a
                    href="https://babylon.legal"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400"
                  >
                    Waitlist
                  </a>
                  {"]"}
                  {"("}
                  <a
                    href="https://babylon.legal"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline"
                  >
                    {"https://babylon.legal"}
                  </a>
                  {")"}
                </span>
                <div className="pt-7" />
                <span className="font-bold" style={{ color: "#9cdcfe" }}>
                  ## My Portfolio
                </span>
                <br />
                <span className="">
                  This was a fun venture in UI design and exploring the state
                  management library, Jotai.
                </span>
                <br />
                <span className="text-yellow-300">
                  {"- ["}
                  <a
                    href="https://github.com/oconnorjohnson/danielojohnson.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400"
                  >
                    GitHub
                  </a>
                  {"]"}
                  {"("}
                  <a
                    href="https://github.com/oconnorjohnson/danielojohnson.com"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline"
                  >
                    {"https://github.com/oconnorjohnson/danielojohnson.com"}
                  </a>
                  {")"}
                </span>
                <div className="pt-7" />
                <span className="font-bold" style={{ color: "#9cdcfe" }}>
                  ## PocketPR
                </span>
                <br />
                <span className="">
                  A simple chatbot enhanced with embedding creation to enable
                  context-aware retrieval and interaction based on a user&apos;s
                  YouTube videos and their comments.
                </span>
                <br />
                <span className="text-yellow-300">
                  {"- ["}
                  <a
                    href="https://pocketpr.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400"
                  >
                    Live Demo
                  </a>
                  {"]"}
                  {"("}
                  <a
                    href="https://pocketpr.app"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline"
                  >
                    {"https://pocketpr.app"}
                  </a>
                  {")"}
                </span>
                <br />
                {/* <span className="text-yellow-300">
                  {"- ["}
                  <a
                    href="https://github.com/foreveryone-ai/pocket-pr-app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400"
                  >
                    GitHub
                  </a>
                  {"]"}
                  {"("}
                  <a
                    href="https://github.com/foreveryone-ai/pocket-pr-app"
                    target="_blank"
                    rel="noreferrer"
                    className=" underline"
                  >
                    {"https://github.com/foreveryone-ai/pocket-pr-app"}
                  </a>
                  {")"}
                </span> */}

                <div className="pt-7" />
              </h1>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
