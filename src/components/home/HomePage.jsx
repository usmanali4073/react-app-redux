import React, { Component } from "react";
import { Link } from "react-router-dom";
import produce from "immer";

export default class HomePage extends Component {
  homeData = {
    firstName: "Usman",
    lastName: "Ali",
    DOB: "12",
  };

  updateName = () => {
    // Object Assign
    // let updatedhomeData = Object.assign({}, this.homeData, {
    //   firstName: "Haniya Ali",
    // });
    // using spead
    // let updatedhomeData = { ...this.homeData, firstName: "Haniya Ali" };
    // console.log(updatedhomeData);

    const userCopy = produce(this.homeData, (draftState) => {
      draftState.firstName = "Haniya Ali";
    });
    console.log(userCopy);
  };

  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3 text-primary">A Rental Guru</h1>
            <p className="lead">Always on your side</p>
            <hr className="my-2" />
            <p>More info</p>
            <p className="lead">
              <Link
                className="btn btn-primary btn-lg"
                to="/about"
                role="button"
              >
                About Us
              </Link>
            </p>
            <button onClick={this.updateName}>Updated Name</button>
          </div>
        </div>
      </>
    );
  }
}
