import create from "zustand";
import useIncrementStore from "./store/incrementStore";
import useApiDataStore from "./store/apiDataStore";

export const useStore = create((...a) => ({
  ...useIncrementStore(...a),
  ...useApiDataStore(...a),
}));

export default useStore;
