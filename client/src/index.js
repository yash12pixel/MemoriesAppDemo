import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./store.js";
import App from "./App";
import "./index.css";

const store = configureStore(window.__PRELOADED_STATE__);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
