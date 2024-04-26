"use client";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
  activeExplorerItem,
  openTabs,
  activeTab,
  commandInputValue,
  isCommandInputActive,
} from "@/state/atoms";
import RootTsxPage from "@/components/root/rootTsxPage";
import BlogsMdPage from "@/components/root/blogsMdPage";
import ProjectsMdPage from "@/components/root/projectsMdPage";
import ContactJsonPage from "@/components/root/contactJsonPage";
import { MdOutlineClose } from "react-icons/md";
import CmdKInstructions from "@/components/root/cmd-k-instructions";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Editor() {
  const [tabs, setTabs] = useAtom(openTabs);
  const [active, setActive] = useAtom(activeTab);
  const [, setActiveExplorerItem] = useAtom(activeExplorerItem);
  const [inputValue, setInputValue] = useAtom(commandInputValue);
  const [isActive, setIsActive] = useAtom(isCommandInputActive);
  const delayConstraint = {
    delay: 250,
    tolerance: 5,
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === "o") {
        event.preventDefault();
        setIsActive(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsActive]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsActive(false);
        setInputValue("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsActive, setInputValue]);
  const openPage = (pageName: string) => {
    const pageMap: Record<string, string> = {
      "root.tsx": "index.js",
      "projects.md": "header",
      "blogs.md": "footer",
      "contact.json": "contact",
    };
    const pageId = pageMap[pageName];
    if (pageId) {
      if (!tabs.includes(pageId)) {
        setTabs([...tabs, pageId]);
      }
      setActive(pageId);
      setIsActive(false);
      setInputValue("");
    }
  };
  const handleInputConfirm = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      openPage(inputValue);
    }
  };
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: delayConstraint }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = tabs.indexOf(active.id);
      const newIndex = tabs.indexOf(over.id);
      if (newIndex >= 0) {
        const newTabs = Array.from(tabs);
        newTabs.splice(oldIndex, 1);
        newTabs.splice(newIndex, 0, active.id);
        setTabs(newTabs);
      }
    }
  };

  type TabName = "index.js" | "header" | "footer" | "contact";

  const tabDisplayNames: Record<TabName, string> = {
    "index.js": "root.tsx",
    header: "projects.md",
    footer: "blogs.md",
    contact: "contact.json",
  };

  const switchTab = (tabName: string) => {
    setActive(tabName);
    setActiveExplorerItem(tabName);
  };

  const closeTab = (tabName: string) => {
    const filteredTabs = tabs.filter((tab) => tab !== tabName);
    setTabs(filteredTabs);
    if (active === tabName) {
      if (filteredTabs.length === 0) {
        setActive("");
        setActiveExplorerItem("");
      } else {
        const closedTabIndex = tabs.indexOf(tabName);
        const newActiveTab =
          closedTabIndex > 0
            ? filteredTabs[closedTabIndex - 1]
            : filteredTabs[0];
        setActive(newActiveTab);
        setActiveExplorerItem(newActiveTab);
      }
    }
  };

  const closeAllTabs = () => {
    setTabs([]);
    setActive("");
    setActiveExplorerItem("");
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.shiftKey && event.key === "z") {
        event.preventDefault();
        closeAllTabs();
      } else if (event.metaKey && event.key === "z") {
        event.preventDefault();
        closeTab(active);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [tabs, active, closeTab, closeAllTabs]);
  const renderTabContent = (tabName: string) => {
    switch (tabName) {
      case "index.js":
        return <RootTsxPage />;
      case "header":
        return <ProjectsMdPage />;
      case "footer":
        return <BlogsMdPage />;
      case "contact":
        return <ContactJsonPage />;
      default:
        return <CmdKInstructions />;
    }
  };
  function isTabName(key: any): key is TabName {
    return ["index.js", "header", "footer", "contact"].includes(key);
  }
  function SortableItem({ id, active, setActive, setActiveExplorerItem }: any) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    const displayName = isTabName(id) ? tabDisplayNames[id] : "Unknown Tab";

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`flex flex-row items-center ${
          active === id ? "bg-gray-800" : "bg-gray-600"
        } border-r hover:cursor-pointer border-gray-800 px-4 py-2`}
      >
        <div className="text-lg text-white" onClick={() => switchTab(id)}>
          {displayName}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeTab(id);
          }}
          className="pt-0.5 ml-6"
        >
          <MdOutlineClose className="text-white" />
        </button>
      </div>
    );
  }

  return (
    <>
      {isActive && (
        <>
          <input
            type="text"
            className=" items-center justify-center p-1 bg-gray-900 text-gray-100 w-full"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputConfirm}
            placeholder="Type a page name..."
            autoFocus
          />
        </>
      )}
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={tabs} strategy={verticalListSortingStrategy}>
          <div className="flex flex-row bg-gray-700">
            {tabs.map((tabName) => (
              <SortableItem
                key={tabName}
                id={tabName}
                active={active}
                setActive={setActive}
                setActiveExplorerItem={setActiveExplorerItem}
              />
            ))}
          </div>
        </SortableContext>
        <div>
          {tabs.length > 0 ? (
            tabs.map(
              (tabName) => active === tabName && renderTabContent(tabName)
            )
          ) : (
            <div className="h-[805px] flex flex-col items-center align-center justify-center">
              <CmdKInstructions />
            </div>
          )}
        </div>
      </DndContext>
    </>
  );
}
