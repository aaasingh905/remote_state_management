const useApiDataStore = (set) => ({
  apiData: {
    data: null,
    loading: true,
    error: false,
  },
  updateApiData: (key, value) => set((state) => ({ ...state, [key]: value })),
});

export default useApiDataStore;
