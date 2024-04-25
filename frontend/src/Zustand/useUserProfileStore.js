import zustand, { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserProfileStore = create(
  persist(
    (set, get) => ({
      UserProfile: [],
      setProfile: (profile) =>
        set({
          UserProfile: [{ id: profile }],
        }),
    }),
    {
      name: "profile",
    }
  )
);
