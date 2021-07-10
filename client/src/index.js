import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TreeContextProvider } from "./store/TreeContext";
import "@innovaccer/design-system/css";

ReactDOM.render(
  <React.StrictMode>
    <TreeContextProvider>
      <App />
    </TreeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
