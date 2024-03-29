import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./Sections/Main";
import App from "./App";
import Work from "./Sections/Work";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="wrap">
      <div className="container-floating">
        <Main />
      </div>
      <div className="container-one">
        <App />
      </div>
      <div className="container-two">
        <Work />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
