import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProivder } from "react-redux";

const store = configureStore();
ReactDOM.render(
  <ReduxProivder store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProivder>,
  document.getElementById("root")
);
