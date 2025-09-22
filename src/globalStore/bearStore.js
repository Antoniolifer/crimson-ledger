import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: [],
  increasePopulation: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { xPos: Math.random() * 200, yPos: Math.random() * 200 },
      ],
    })),
  removeAllBears: () => set({ bears: [] }),
  updateBears: (newBears) => set({ bears: newBears }),
}));

export default useBearStore;
