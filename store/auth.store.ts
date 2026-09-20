import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  mobile: string;
  userType: "customer" | "provider";
  fullName: string;
  profileComplete: boolean;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  locale: "en" | "hi";
  setAuth: (user: User, token: string) => void;
  setLocale: (locale: "en" | "hi") => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      locale: "hi",
      setAuth: (user, token) => {
        document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}`;
        set({ user, token });
      },
      setLocale: (locale) => {
        document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
        set({ locale });
      },
      logout: () => {
        document.cookie = "token=; Max-Age=0; path=/";
        set({ user: null, token: null });
      },
    }),
    { name: "soundlink-auth" },
  ),
);
