import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const activeExplorerItem = atom<string>("index.js");
export const isAppFolderOpen = atomWithStorage("isAppFolderOpen", true);
export const isPagesTabOpen = atomWithStorage("isPagesOpen", false);
export const openTabs = atom<string[]>(["index.js"]);
export const activeTab = atom<string>("index.js");
export const lastOpenedTab = atom<string>("index.js");
export const isTerminalOpen = atomWithStorage("isTerminalOpen", false);
