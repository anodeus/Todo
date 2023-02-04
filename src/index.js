import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const DATA = [
  { id: "todo-0", name: "Data Structure and Algorithms class 11:30am", completed: true },
  { id: "todo-1", name: "LeetCode 7 days test series", completed: false },
  { id: "todo-2", name: "HakerRank 100days code challenge", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
