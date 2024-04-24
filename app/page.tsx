import RootTsxPage from "@/components/root/title";
import { MdOutlineClose } from "react-icons/md";
import ProjectCarousel from "@/components/root/project-carousel";
import BlogCarousel from "@/components/root/blog-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="p-10 w-full h-full">
      <div className="bg-gray-800 flex flex-col">
        <RootTsxPage />
      </div>
    </div>
  );
}
