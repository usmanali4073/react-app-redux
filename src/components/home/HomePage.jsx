import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-3 text-primary">A Rental Guru</h1>
            <p class="lead">Always on your side</p>
            <hr class="my-2" />
            <p>More info</p>
            <p class="lead">
              <Link class="btn btn-primary btn-lg" to="/about" role="button">
                About Us
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }
}
