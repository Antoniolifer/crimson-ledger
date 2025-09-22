import { create } from "zustand";
import data from "./sampleData";
const useReviewStore = create((set) => ({
  sliderOpenStatus: false,
  setSliderOpenStatus: (value) => set(() => ({ sliderOpenStatus: value })),
  currentUser: null,
  registerUser: (user) => set((state) => ({ users: [...state.users, user] })),
  loginUser: (user) =>
    set((state) => ({
      currentUser: state.users.filter((u) => u.username === user.username)[0],
    })),

  users: [{ username: "MossKnight" }, { username: "OrangeDuchess" }],

  reviews: data.reviews2,
  games: data.games,
}));

export default useReviewStore;
