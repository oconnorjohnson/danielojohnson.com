import Title from "@/components/root/title";
import ProjectCarousel from "@/components/root/project-carousel";
import BlogCarousel from "@/components/root/blog-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div>
      <Title />
    </div>
  );
}

{
  /* 
Layout: SPA with two tabs, one for blog posts and one for projects
Each tab has a carousel, each item when clicked opens near full screen modal with interior scroll area for content that's rendered from the database (blog post or project)
*/
}
