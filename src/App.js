import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Todos} />
        </div>
      </Router>
    );
  }
}
