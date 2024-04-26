"use client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  activeExplorerItem,
  openTabs,
  activeTab,
  lastOpenedTab,
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

const delayConstraint = {
  delay: 250,
  tolerance: 5,
};

export default function Editor() {
  const [tabs, setTabs] = useAtom(openTabs);
  const [active, setActive] = useAtom(activeTab);
  const [, setActiveExplorerItem] = useAtom(activeExplorerItem);
  // const [lastTab, setLastTab] = useAtom(lastOpenedTab);

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
        // Additional check to ensure newIndex is valid
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
    // setLastTab(tabName);
    setActiveExplorerItem(tabName);
  };

  // const openLastTab = (tabName: string) => {
  //   switchTab(tabName);
  //   setActiveExplorerItem(tabName);
  // };

  const closeTab = (tabName: string) => {
    const filteredTabs = tabs.filter((tab) => tab !== tabName);
    setTabs(filteredTabs);
    if (active === tabName) {
      if (filteredTabs.length === 0) {
        setActive("");
        setActiveExplorerItem("");
        // setLastTab("");
      } else {
        const closedTabIndex = tabs.indexOf(tabName);
        const newActiveTab =
          closedTabIndex > 0
            ? filteredTabs[closedTabIndex - 1]
            : filteredTabs[0];
        setActive(newActiveTab);
        // setLastTab(newActiveTab);
        setActiveExplorerItem(newActiveTab);
      }
    }
  };

  // const openLastTab = () => {
  //   switchTab(lastTab);
  //   setActiveExplorerItem(lastTab);
  // };

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
      } else if (event.metaKey && event.key === "b") {
        event.preventDefault();
        // openLastTab();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [tabs, active, closeTab, closeAllTabs]);
  const renderTabContent = (tabName: string) => {
    const displayName = tabDisplayNames[tabName as TabName];

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
        return null;
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
        <div className="text-md text-white" onClick={() => switchTab(id)}>
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
