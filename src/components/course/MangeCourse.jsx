import React, { Component } from "react";

export default import("react-redux").Connect(
  mapStateToProps,
  mapDispatchToprops
)(
  class MangeCourse extends Component {
    constructor(props) {
      super(props);

      this.state = {
        course: {
          firstName: "",
        },
      };
    }
    mapStateToProps(state) {
      return { course: state.course };
    }
    mapDispatchToprops() {}

    handleChnages = (event) => {
      let course = { ...this.state.course, firstName: event.target.value };
      this.setState({ course: course });
    };
    handleSubmit = (event) => {
      event.preventDefault();
      let { firstName } = { ...this.state.course };
      alert(firstName);
    };

    render() {
      return (
        <div>
          <h1>Courses</h1>
          <h2>Add A Course</h2>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label
                  htmlFor="inputFirstName"
                  className="col-sm-1-12 col-form-label"
                >
                  First Name
                </label>
                <div className="col-sm-1-12">
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="inputFirstName"
                    placeholder="First Name"
                    onChange={this.handleChnages}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="offset-sm-2 col-sm-10">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onSubmit={this.handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
);
