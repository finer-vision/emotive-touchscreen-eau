import { create } from "zustand";

export type Path = "smpc" | "keydata" | "oabin65" | "cvsafety" | "oabinmen" | "home" | "screensaver"

type PathState = {
    path: Path;
    setPath: (path: Path) => void;
}

export const usePathState = create<PathState>(set => ({
    path: "screensaver",
    setPath: (path) => set({ path })
}));
