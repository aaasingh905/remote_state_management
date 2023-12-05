import create from "zustand";

const useStore = create((set) => ({
  count: 1,
  apiData: {
    data: null,
    loading: true,
    error: false,
  },
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
  updateApiData: (key, value) => set((state) => ({ ...state, [key]: value })),
}));

export default useStore;
