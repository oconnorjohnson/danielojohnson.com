import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const activeExplorerItem = atom<string>("index.js");
export const isAppFolderOpen = atomWithStorage("isAppFolderOpen", true);
