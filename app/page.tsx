import Title from "@/components/root/title";
import { MdOutlineClose } from "react-icons/md";
import ProjectCarousel from "@/components/root/project-carousel";
import BlogCarousel from "@/components/root/blog-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="p-12 w-full h-full">
      <div className="bg-gray-800 rounded-xl w-full h-full flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-grow rounded-t-xl bg-gray-600">
            <div className="bg-gray-800 rounded-tl-xl px-4 py-2 flex flex-row items-center text-md">
              root.tsx <MdOutlineClose className="pl-2 h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>
        <div className="px-8 py-4">
          <Title />
        </div>
      </div>
    </div>
  );
}

{
  /* 
Layout: SPA with two tabs, one for blog posts and one for projects
Each tab has a carousel, each item when clicked opens near full screen modal with interior scroll area for content that's rendered from the database (blog post or project)
*/
}
