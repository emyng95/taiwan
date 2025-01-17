import React from "react"; //must have
import ReactDOM from "react-dom"; //must have
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./App";

import * as serviceWorker from "./serviceWorker"; //progressive or offline webapp

const app = (
  <Router>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
