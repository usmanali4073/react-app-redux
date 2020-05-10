import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  activeStyle = { color: "#F15B2A" };
  render() {
    return (
      <div>
        <NavLink to="/" activeStyle={this.activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={this.activeStyle}>
          About
        </NavLink>
        {" | "}
        <NavLink to="/course" activeStyle={this.activeStyle}>
          Course
        </NavLink>
      </div>
    );
  }
}
