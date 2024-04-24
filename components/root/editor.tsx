"use client";
import { useAtom } from "jotai";
import { openTabs, activeTab } from "@/state/atoms";
import RootTsxPage from "@/components/root/rootTsxPage";
import BlogsMdPage from "@/components/root/blogsMdPage";
import ProjectsMdPage from "@/components/root/projectsMdPage";

export default function Editor() {
  const [tabs, setTabs] = useAtom(openTabs);
  const [active, setActive] = useAtom(activeTab);

  const closeTab = (tabName: string) => {
    setTabs(tabs.filter((tab) => tab !== tabName));
    if (active === tabName) {
      const newActiveTab = tabs.find((tab) => tab !== tabName) || "";
      setActive(newActiveTab);
    }
  };

  const switchTab = (tabName: string) => {
    setActive(tabName);
  };

  return (
    <>
      <div className="flex flex-row">
        {/* {tabs.map((tab) => (
          <div
            key={tab}
            className={`px-4 py-2 ${
              active === tab
                ? "bg-gray-800 text-yellow-300"
                : "bg-gray-600 text-md"
            }`}
            onClick={() => switchTab(tab)}
          >
            {tab}
            <span onClick={() => closeTab(tab)} className="pl-3 cursor-pointer">
              ✕
            </span>
          </div>
        ))} */}
      </div>
      <div>
        {active === "index.js" && <RootTsxPage />}
        {active === "header" && <ProjectsMdPage />}
        {active === "footer" && <BlogsMdPage />}
      </div>
    </>
  );
}
