import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// components for this product
import Components from "./views/Components/Components";
import Navbar from "./components/Navbar/Navbar";
import Test from "./views/Components/Test";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div>
      <Navbar />
      <div className="App">
        <Route path="/" exact component={Components} />
        <Route path="/test" component={Test} />
      </div>
    </div>
  </Router>,
  document.getElementById("root")
);
