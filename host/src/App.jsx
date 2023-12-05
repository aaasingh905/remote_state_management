import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "nav/Header";
import useStore from "remotestate/store";
import "./index.scss";

const App = () => {
  const {
    count,
    increment,
    apiData: { data = null, loading = false, error = false },
    updateApiData,
  } = useStore();
  useEffect(() => {
    if (!data && !loading) {
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
  }, [data, loading, error]);

  return (
    <div className="text-xl mx-auto max-w-6xl">
      <Header />
      <div className="py-4">Name: Host App</div>
      <div>
        Count: {count}{" "}
        <button
          onClick={increment}
          className="text-white py-1 px-2 rounded"
          style={{ background: "rgb(1, 82, 135)" }}
        >
          Add
        </button>
      </div>
      {data && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "lightGreen",
            marginTop: "10px",
          }}
        >
          <h3>API Response</h3>
          <span>API : {data?.[0]?.API}</span>
          <span>Description : {data?.[0]?.Description}</span>
        </div>
      )}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
