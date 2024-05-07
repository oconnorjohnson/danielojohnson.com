import { MdArrowDropUp } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Link
        href="#home"
        className="flex flex-row items-center justify-center pb-12"
      >
        <MdArrowDropUp className="h-6 w-6 pr-2" />
        Scroll to top
      </Link>
    </>
  );
}
