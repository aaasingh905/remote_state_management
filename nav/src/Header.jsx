import React, { useEffect } from "react";
import axios from "axios";
import useStore from "remotestate/store";

export default () => {
  const {
    count,
    clear,
    apiData: { data = null, loading = false, error = false },
    updateApiData,
  } = useStore();

  useEffect(() => {
    if (!data) {
      axios
        .get("https://api.publicapis.org/random")
        .then((res) => {
          if (res?.status === 200) {
            updateApiData("apiData", {
              data: res?.data?.entries,
              loading: false,
              error: false,
            });
          }
        })
        .catch((err) =>
          updateApiData("apiData", {
            data: null,
            loading: false,
            error: true,
          })
        );
    }
  }, [data, error, loading]);

  return (
    <header
      className="font-bold text-xl p-5 flex"
      style={{
        color: `${data?.[0]?.API ? "rgb(1, 82, 135)" : "green"}`,
        borderBottom: "2px solid #fb8500",
      }}
    >
      <div className="flex-grow">State Management</div>
      <div className="flex-grow">
        Header App {data?.[0]?.API && <span>({data?.[0]?.API})</span>}
      </div>
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
