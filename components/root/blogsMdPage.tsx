import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MdOutlineClose } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
export default function Title() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full bg-gray-800 shadow-xl flex flex-row items-center justify-start pl-4 py-2 text-md text-gray-400">
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
          <span className="hover:font-bold transition-all">blogs.md</span>
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
              <div>20</div>{" "}
            </div>
            <div className="pt-2">
              {/* PERSON */}

              <h1 className="font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg ">
                <span className="font-bold" style={{ color: "#9cdcfe" }}>
                  # My Blogs
                </span>
                <div className="pt-7" />
                <span className="font-bold text-yellow-300">
                  ## Post 1: Don&apos;t Write Blogs {"(Write Code)"}
                </span>
                <br />
                <span>
                  As the only engineer at my office, and the only technology
                  brother of my friends, I&apos;ve felt for some time like
                  I&apos;m clawing at an untouchable in-group, and many times
                  felt driven to do some of the many things that junior
                  engineers do to be noticed which have absolutely nothing to do
                  with bettering their craft (e.g. contributing to open source,
                  writing blogs, networking on LinkedIn, etc..). I&apos;ve
                  avoided extensive LinkedIn posturing because I can&apos;t
                  stand the site, and since becoming a part of Theo&apos;s
                  community on Twitch I&apos;ve realized the woes of OSS
                  contributions made from ill-intent. Blogs, on the other hand,
                  are mostly harmless, a great exposé of personality, and (for
                  some) a joy to write. Moreover, I&apos;m a voracious consumer
                  of information and do feel an urge to give some back. But
                  whenever I start researching any of the many ideas I have to
                  write about, I realize I can&apos;t honestly say I&apos;ve
                  written enough code to justify spending time writing a blog,
                  let alone that I&apos;ve learned enough about coding to have
                  something valuable to say. So with that said, this post is
                  over, and I&apos;m getting back to coding.
                </span>
                <div className="pt-7" />
              </h1>
            </div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
