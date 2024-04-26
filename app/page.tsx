import Editor from "@/components/root/editor";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdOutlineClose } from "react-icons/md";
import ProjectCarousel from "@/components/root/project-carousel";
import BlogCarousel from "@/components/root/blog-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceChoice from "@/components/root/experience-choice";

export default function Home() {
  return (
    <>
      {/* phone experience */}
      <div className="p-10 w-full h-full md:hidden ">
        <div className="bg-gray-800 flex flex-col">
          {/* Here we're going to have the mobile site, with a header telling the user to come back on a laptop or desktop to get a choice of experiences */}
        </div>
      </div>
      {/* code-editor experience */}
      <div className="hidden md:block">
        <ExperienceChoice />
      </div>
    </>
  );
}
