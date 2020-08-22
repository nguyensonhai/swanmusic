import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// components for this product
import Components from "./views/Components";
import Header from "./components/Header";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div className="body">
      <Header />
      <div className="App">
        <Route path="/" exact component={Components} />
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
