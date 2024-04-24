"use client";
import { useAtom } from "jotai";
import {
  activeExplorerItem,
  isAppFolderOpen,
  isPagesTabOpen,
} from "@/state/atoms";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { FcFolder, FcOpenedFolder, FcFile } from "react-icons/fc";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";

export default function Component({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useAtom(activeExplorerItem);
  const [isOpen, setIsOpen] = useAtom(isAppFolderOpen);
  const [isPagesOpen, setIsPagesOpen] = useAtom(isPagesTabOpen);

  const handleItemClick = (itemId: any) => {
    setActiveItem(itemId);
  };

  const handleAppFolderOpen = () => {
    setIsOpen((prev) => !prev); // Correctly toggle the state
  };

  const handlePagesFolderOpen = () => {
    setIsPagesOpen((prev) => !prev); // Correctly toggle the state
  };

  return (
    <div className="flex flex-row h-full overflow-auto">
      <div className="w-64 bg-gray-900 text-gray-100">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <FcFolder className="h-8 w-8" />
            <span className="font-semibold">Explorer</span>
          </div>
          <div className="space-y-2">
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
                  <FcFile className="h-6 w-6" />
                  <span>root.tsx</span>
                </div>
                <Collapsible>
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
                      <MdArrowRight className="h-6 w-6" />
                    ) : (
                      <MdArrowDropDown className="h-6 w-6" />
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
                      <FcFile className="h-6 w-6" />
                      <span>Projects.tsx</span>
                    </div>
                    <div
                      className={`flex items-center gap-2 px-2 py-1 rounded ${
                        activeItem === "footer"
                          ? "bg-gray-700"
                          : "hover:bg-gray-700"
                      }`}
                      onClick={() => handleItemClick("footer")}
                    >
                      <FcFile className="h-6 w-6" />
                      <span>Blogs.tsx</span>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CollapsibleContent>
            </Collapsible>

            <div
              className={`flex items-center gap-2 px-2 py-1 rounded ${
                activeItem === "contact.json"
                  ? "bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleItemClick("contact.json")}
            >
              <FcFile className="h-6 w-6" />
              <span>contact.json</span>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
