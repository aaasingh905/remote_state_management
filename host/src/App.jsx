import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "nav/Header";
import useStore from "remotestate/store";
import "./index.scss";

const App = () => {
  const { count, increment } = useStore();
  useEffect(() => {
    axios.get("https://api.publicapis.org/random").then((res) => {
      console.log(res, "***");
    });
  }, []);
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
      {/* <div> */}

      {/* </div> */}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
