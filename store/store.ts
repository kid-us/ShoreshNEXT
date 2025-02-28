import { create } from "zustand";

interface ToggleState {
  isToggled: boolean;
  toggle: () => void;
}

const useToggleStore = create<ToggleState>((set) => ({
  isToggled: false, // Initial state
  toggle: () => set({ isToggled: true }), // Always sets it to true
}));

export default useToggleStore;
