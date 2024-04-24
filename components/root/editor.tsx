"use client";
import { useAtom } from "jotai";
import { activeExplorerItem, openTabs, activeTab } from "@/state/atoms";
import RootTsxPage from "@/components/root/rootTsxPage";
import BlogsMdPage from "@/components/root/blogsMdPage";
import ProjectsMdPage from "@/components/root/projectsMdPage";
import { FcInfo } from "react-icons/fc";
import { MdOutlineClose } from "react-icons/md";
import CmdKInstructions from "@/components/root/cmd-k-instructions";

export default function Editor() {
  const [tabs, setTabs] = useAtom(openTabs);
  const [active, setActive] = useAtom(activeTab);

  type TabName = "index.js" | "header" | "footer";

  const tabDisplayNames: Record<TabName, string> = {
    "index.js": "root.tsx",
    header: "projects.md",
    footer: "blogs.md",
  };
  const [, setActiveExplorerItem] = useAtom(activeExplorerItem);

  const switchTab = (tabName: string) => {
    setActive(tabName);
    setActiveExplorerItem(tabName); // Update the explorer item to reflect the active tab
  };

  const closeTab = (tabName: string) => {
    const filteredTabs = tabs.filter((tab) => tab !== tabName);
    setTabs(filteredTabs);
    if (active === tabName) {
      if (filteredTabs.length === 0) {
        // No tabs left, set active tab and explorer item to null or empty
        setActive("");
        setActiveExplorerItem("");
      } else {
        // Find the index of the tab that was just closed
        const closedTabIndex = tabs.indexOf(tabName);
        // Determine the new active tab: previous one if possible, otherwise the next one
        const newActiveTab =
          closedTabIndex > 0
            ? filteredTabs[closedTabIndex - 1]
            : filteredTabs[0];
        setActive(newActiveTab);
        setActiveExplorerItem(newActiveTab);
      }
    }
  };

  const renderTabContent = (tabName: string) => {
    // Cast tabName to TabName type when using it as a key
    // Use a type assertion only if you're sure tabName will always match a key in tabDisplayNames
    const displayName = tabDisplayNames[tabName as TabName];

    switch (tabName) {
      case "index.js":
        return <RootTsxPage />;
      case "header":
        return <ProjectsMdPage />;
      case "footer":
        return <BlogsMdPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex flex-row bg-gray-700">
        {tabs.map((tabName) => {
          // Use displayName for rendering the tab name in the UI
          const displayName = tabDisplayNames[tabName as TabName];
          return (
            <div className="bg-gray-600 flex-row">
              <div
                key={tabName}
                className={`flex flex-grow ${
                  active === tabName ? "bg-gray-800" : "bg-gray-600"
                } border-r hover:cursor-pointer border-gray-800 px-4 py-2  items-center justify-between`}
              >
                <span
                  className="text-md text-white"
                  onClick={() => switchTab(tabName)}
                >
                  {displayName}
                </span>
                <button onClick={() => closeTab(tabName)}>
                  <MdOutlineClose className="text-white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {tabs.length > 0 ? (
          tabs.map((tabName) => active === tabName && renderTabContent(tabName))
        ) : (
          <div className="h-[805px] flex flex-col items-center align-center justify-center">
            <CmdKInstructions />
          </div>
        )}
      </div>
    </>
  );
}
