import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MdOutlineClose } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
export default function Title() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full bg-gray-800 shadow-xl flex flex-row items-center justify-start pl-4 py-2 text-sm">
          danielojohnson.com<span className="px-2">{">"}</span>app
          <span className="px-2">{">"}</span>README
          <span className="pl-2">{">"}</span>
          <Image
            alt="react file icon"
            src="/react.svg"
            width={30}
            height={30}
            className="px-1"
          />{" "}
          blogs.md
        </div>
        <ScrollArea className="h-[722px] w-[900px]"></ScrollArea>
      </div>
    </>
  );
}
