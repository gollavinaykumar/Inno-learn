import zustand, { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useUserStore= create(
  persist(
    (set, get) => ({
      user: [],
      setUser: (loggedUser) =>
        set({
          user: [loggedUser],
        }),
      removeUser: () =>
        set({
          user: [],
        }),
    }),
    {
      name: "user",
    }
  )
);
