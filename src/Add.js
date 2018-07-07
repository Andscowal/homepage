import React, { Component } from "react";

const Add = props => {
  return (
    <li className="mt-5">
      {props.todo}
      <button className="btn btn-danger btn-sm ml-4" onClick={props.delete}>
        Remove
      </button>
    </li>
  );
};

export default Add;
