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

  reviews: data.reviews,
  games: [
    {
      title: "Hollow Knight: Silksong",
      picture:
        "https://cdn.wikimg.net/en/hkwiki/images/thumb/1/13/Silksong_cover.jpg/640px-Silksong_cover.jpg",
    },
    {
      title: "The Witcher 3",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/250px-Witcher_3_cover_art.jpg",
    },
    {
      title: "Battlefield I",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/f/fc/Battlefield_1_cover_art.jpg",
    },
  ],
}));

export default useReviewStore;
