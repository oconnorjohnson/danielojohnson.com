"use client";
import Image from "next/image";
import { useAtom } from "jotai";
import {
  activeExplorerItem,
  isAppFolderOpen,
  isPagesTabOpen,
  openTabs,
  activeTab,
} from "@/state/atoms";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { FcFolder, FcOpenedFolder, FcFile, FcInfo } from "react-icons/fc";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";

export default function Component({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useAtom(activeExplorerItem);
  const [isOpen, setIsOpen] = useAtom(isAppFolderOpen);
  const [isPagesOpen, setIsPagesOpen] = useAtom(isPagesTabOpen);
  const [tabs, setTabs] = useAtom(openTabs);
  const [, setActive] = useAtom(activeTab);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    // Check if the tab is already open
    if (!tabs.includes(itemId)) {
      // Correctly update the openTabs atom
      setTabs((prevTabs) => [...prevTabs, itemId]);
    }
    // Correctly update the activeTab atom
    console.log("active item:", itemId);
    setActive(itemId);
  };

  const handleAppFolderOpen = () => {
    setIsOpen((prev) => !prev); // Correctly toggle the state
  };

  const handlePagesFolderOpen = () => {
    setIsPagesOpen((prev) => !prev); // This is sufficient for toggling and persisting state
  };

  return (
    <div className="flex flex-row h-full overflow-auto">
      <div className="w-64 bg-gray-900 text-gray-100">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <FcFolder className="h-8 w-8" />
            <span className="font-semibold">Explorer</span>
          </div>
          <div className="space-y-1">
            <Collapsible open={isOpen}>
              <CollapsibleTrigger
                className={`flex items-center justify-between w-full px-2 py-1 rounded ${
                  activeItem === "app" ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={handleAppFolderOpen}
              >
                <div className="flex items-center gap-2">
                  {isOpen ? (
                    <FcOpenedFolder className="h-6 w-6" />
                  ) : (
                    <FcFolder className="h-6 w-6" />
                  )}
                  <span>app</span>
                </div>
                {isOpen ? (
                  <MdArrowDropDown className="h-6 w-6" />
                ) : (
                  <MdArrowRight className="h-6 w-6" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-6 space-y-1">
                <div
                  className={`flex items-center gap-2 px-2 py-1 mt-1 rounded ${
                    activeItem === "index.js"
                      ? "bg-gray-700"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => handleItemClick("index.js")}
                >
                  <Image
                    alt="react file icon"
                    src="/react.svg"
                    width={30}
                    height={30}
                    className="pr-1"
                  />
                  <span>root.tsx</span>
                </div>
                <Collapsible open={isPagesOpen}>
                  <CollapsibleTrigger
                    className="flex items-center justify-between w-full px-2 py-1 rounded hover:bg-gray-700"
                    onClick={handlePagesFolderOpen}
                  >
                    <div className="flex items-center gap-2">
                      {isPagesOpen ? (
                        <FcOpenedFolder className="h-6 w-6" />
                      ) : (
                        <FcFolder className="h-6 w-6" />
                      )}
                      <span>components</span>
                    </div>
                    {isPagesOpen ? (
                      <MdArrowDropDown className="h-6 w-6" />
                    ) : (
                      <MdArrowRight className="h-6 w-6" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 space-y-1">
                    <div
                      className={`flex items-center gap-2 px-2 py-1 mt-1 rounded ${
                        activeItem === "header"
                          ? "bg-gray-700"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={() => handleItemClick("header")}
                    >
                      <FcInfo className="h-6 w-6" />
                      <span>projects.md</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 px-2 py-1 rounded ${
                        activeItem === "footer"
                          ? "bg-gray-700"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={() => handleItemClick("footer")}
                    >
                      <FcInfo className="h-6 w-6" />
                      <span>blogs.md</span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CollapsibleContent>
            </Collapsible>

            <div
              className={`flex items-center gap-2 px-2 py-1 rounded ${
                activeItem === "contact" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => handleItemClick("contact")}
            >
              <Image
                alt="json file icon"
                src="/json.svg"
                width={25}
                height={25}
                className="px-1"
              />
              <span>contact.json</span>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
