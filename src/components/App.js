import React, { Component } from "react";
import AboutPage from "./about/AboutPage";
import HomePage from "./home/HomePage";
import MangeCourse from "./course/MangeCourse";
import { Switch, Route } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./common/PageNotFound";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/course" component={MangeCourse} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
