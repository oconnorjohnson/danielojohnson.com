import Header from "@/components/boring/header";
import Projects from "@/components/boring/projects";
import Skills from "@/components/boring/skills";
import Blogs from "@/components/boring/blogs";
import Contact from "@/components/boring/contact";
import Footer from "@/components/boring/footer";

export default function BoringPage() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col w-screen bg-gray-950"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex flex-col items-center justify-center w-full ">
          <Header />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            <Projects />
          </div>
          <div className="py-12 w-full " />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            <Skills />
          </div>
          <div className="py-12 w-full " />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            <Blogs />
          </div>
          <div className="py-12 w-full " />
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            <Contact />
          </div>
          <div className="flex flex-col justify-center w-3/4 lg:w-1/2">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
