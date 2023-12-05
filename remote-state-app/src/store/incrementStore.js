import create from "zustand";

const useIncrementStore = (set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
});

export default useIncrementStore;
