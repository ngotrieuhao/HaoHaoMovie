import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./css/main.scss";
import "./css/footer.scss";
import "./css/list.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <HashRouter>
      <App />
      <ToastContainer></ToastContainer>
    </HashRouter>
  </React.Fragment>
);

reportWebVitals();
