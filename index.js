import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
import { Provider } from "react-reduct";
import store from "./store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
