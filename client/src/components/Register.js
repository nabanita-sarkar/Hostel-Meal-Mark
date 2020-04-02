import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      year: "",
      V_NV: ""
    };
    this.nameChange = this.nameChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.v_nvChange = this.v_nvChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  nameChange(e) {
    this.setState({ name: e.target.value });
  }
  yearChange(e) {
    this.setState({ year: e.target.value });
  }
  v_nvChange(e) {
    this.setState({ V_NV: e.target.value });
  }

  addUser(event) {
    event.preventDefault();
    const userAdd = {
      name: this.state.name,
      year: this.state.year,
      V_NV: this.state.V_NV
    };
    console.log(userAdd);
    axios
      .post("http://localhost:4000/register", userAdd)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addUser} method="user">
          <input
            type="text"
            onChange={this.nameChange}
            name={this.state.name}
          />
          <input
            type="text"
            onChange={this.yearChange}
            name={this.state.year}
          />
          <input
            type="text"
            onChange={this.v_nvChange}
            name={this.state.V_NV}
          />
          <button type="submit">Register</button>
        </form>
        <Redirect to={"/register"} />
      </div>
    );
  }
}

export default Register;
