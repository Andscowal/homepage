import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <ul style={{ float: "left" }}>
            <li>
              <a href="https://www.yahoo.com/">To Yahoo!</a>
            </li>
            <li>
              <a href="https://www.google.com/">To Google</a>
            </li>
          </ul>
          <ul style={{ float: "right" }}>
            <li>
              <Link exact to="/" style={{ color: "#fff" }}>
                Bluebonnet Dreams
              </Link>
            </li>
            <li>
              <li>
                <a href="https://frozen-island-27274.herokuapp.com/">Soothe</a>
              </li>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
