"use client";
import { useAtom } from "jotai";
import { activeExplorerItem, isAppFolderOpen } from "@/state/atoms";
import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { FcFolder } from "react-icons/fc";

export default function Component({ children }: { children: React.ReactNode }) {
  const [activeItem, setActiveItem] = useAtom(activeExplorerItem);
  const [isOpen, setIsOpen] = useAtom(isAppFolderOpen);

  const handleItemClick = (itemId: any) => {
    setActiveItem(itemId);
  };

  const handleAppFolderOpen = () => {
    setIsOpen((prev) => !prev); // Correctly toggle the state
  };
  return (
    <div className="flex flex-row h-full overflow-auto">
      <div className="w-64 bg-gray-800 text-gray-100">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-6">
            <FolderIcon className="h-5 w-5" />
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
                  <FolderOpenIcon className="h-4 w-4" />
                  <span>app</span>
                </div>
                <ChevronDownIcon className="h-4 w-4 transition-transform" />
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
                  <FileIcon className="h-4 w-4" />
                  <span>root.tsx</span>
                </div>
                <Collapsible>
                  <CollapsibleTrigger
                    className="flex items-center justify-between w-full px-2 py-1 rounded hover:bg-gray-700"
                    onClick={() => handleItemClick("components")}
                  >
                    <div className="flex items-center gap-2">
                      <FolderIcon className="h-4 w-4" />
                      <span>components</span>
                    </div>
                    <ChevronRightIcon className="h-4 w-4 transition-transform" />
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
                      <FileIcon className="h-4 w-4" />
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
                      <FileIcon className="h-4 w-4" />
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
              <FileIcon className="h-4 w-4" />
              <span>contact.json</span>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function FolderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}

function FolderOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
