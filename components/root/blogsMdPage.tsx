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
            </div>
            <div className="pt-2">{/* PERSON */}</div>
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
