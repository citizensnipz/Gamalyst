import { create } from "zustand";

interface NavigationStore {
  selectedSection: string;
  setSection: (section: string) => void;
}

const useNavigationStore = create<NavigationStore>((set) => ({
  selectedSection: "overview",
  setSection: (section) => set({ selectedSection: section }),
}));

export default useNavigationStore;