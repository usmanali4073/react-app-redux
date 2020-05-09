import React, { Component } from "react";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </BrowserRouter>
      </div>
    );
  }
}
