import React, { Component } from "react";
import Add from "./Add";

import "./App.css";

const bgColors = {
  default: `url("img4.jpg")`,
  pretty: `url("img3.jpg")`,
  hay: `url("img1.jpg")`,
  flower: `url("img2.jpg")`
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: "",
      bgColor: bgColors.default
    };

    this.interval = setInterval(() => {
      let randomColor =
        bgColors[
          Object.keys(bgColors)[
            Math.floor(Math.random() * Object.keys(bgColors).length)
          ]
        ];
      this.setState(() => ({ bgColor: randomColor }));
    }, 10000);
  }

  onType = e => {
    this.setState({ currentTodo: e.target.value });
  };

  onClick = () => {
    let copied = this.state.todos.slice();
    copied.push(this.state.currentTodo);
    this.setState({ todos: copied, currentTodo: "" });
  };

  deleteTodo = i => {
    let copied = this.state.todos.slice();
    copied.splice(i, 1);
    this.setState({ todos: copied });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state.bgColor);
    let list = this.state.todos.map((e, i) => {
      return <Add todo={e} delete={() => this.deleteTodo(i)} />;
    });
    return (
      <div
        className="App"
        style={{
          height: "100vh",
          backgroundImage: this.state.bgColor,
          backgroundSize: "cover "
        }}
      >
        <h1 className="pt-5">Hello Andrew,</h1>
        <h3>What goals do you have today?</h3>
        <input
          placeholder="I need to work on..."
          value={this.state.currentTodo}
          onChange={this.onType}
          className="btn-sm mt-4"
        />
        <button className="btn btn-info btn-sm" onClick={this.onClick}>
          Add
        </button>
        <br style={{ lineHeight: "50px" }} />
        {this.state.todos.length === 0 ? (
          "Are you sure you're done?"
        ) : (
          <ul>{list}</ul>
        )}
      </div>
    );
  }
}

export default App;
