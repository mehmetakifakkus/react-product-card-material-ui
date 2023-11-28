import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// components
import App from "./App";
import Navbar from "./components/navbar/Navbar";

// state management
import { Provider } from "react-redux";
import store from "./redux/createStore";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <div className="pb-20 pt-28">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
