import { create } from "zustand";

export type Path = "smpc" | "keydata" | "oabin65" | "cvsafety" | "oabinmen" | "home"

type PathState = {
    path: Path;
    setPath: (path: Path) => void;
}

export const usePathState = create<PathState>(set => ({
    path: "home",
    setPath: (path) => set({ path })
}));