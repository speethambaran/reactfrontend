import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./indexcopy.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
  </React.StrictMode>
);





