import React, { useEffect } from "react";

import useStore from "remotestate/store";
import useFetch from "./hooks/fetchWrapper";

export default () => {
  const { count, clear } = useStore();

  return (
    <header
      className="font-bold text-xl p-5 flex"
      style={{ color: "rgb(1, 82, 135)", borderBottom: "2px solid #fb8500" }}
    >
      <div class="flex-grow">State Management</div>
      <div class="flex-grow">Header App</div>
      <div>
        Count :{count}
        <button
          onClick={clear}
          className="font-bold py-1 px-2 rounded mx-2"
          style={{ background: "rgb(1, 82, 135)", color: "#fff" }}
        >
          X
        </button>
      </div>
    </header>
  );
};
