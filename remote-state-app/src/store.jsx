import create from "zustand";
import fetchDataThroughRemote from "./hooks/fetchDataThroughRemote";

const useStore = create((set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  clear: () => set(() => ({ count: 0 })),
  ongoingRequests: new Map(),
  addRequest: (key) => {
    set((state) => {
      state.ongoingRequests.set(key, true);
    });
  },
  removeRequest: (key) => {
    set((state) => {
      state.ongoingRequests.delete(key);
    });
  },
  isRequestOngoing: (key) => {
    return useStore.getState().ongoingRequests.has(key);
  },
  makeAPICallThroughRemote: (params) => {
    fetchDataThroughRemote(params);
  },
}));

export default useStore;
