import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../store";


console.log("hi");
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
