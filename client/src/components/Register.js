import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { TextField as Input } from "@material-ui/core";
import { Row, Container, Col } from "react-bootstrap";
import StyledButton from "./Button";
import Layout from "./Layout";

import NavBar from "./NavBar";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      year: "",
      V_NV: "",
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
      V_NV: this.state.V_NV,
    };
    console.log(userAdd);
    axios
      .post("http://localhost:4000/register", userAdd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Layout>
        <form onSubmit={this.addUser} method="user">
          <div style={{ margin: "1rem" }}>
            <Input
              label="Name"
              hint="Enter Your Name"
              type="text"
              variant="filled"
              color="secondary"
              fullWidth
              onChange={this.nameChange}
              name={this.state.name}
            />
          </div>
          <div style={{ margin: "1rem" }}>
            <Input
              label="Year"
              hint="Enter Your Year"
              type="text"
              variant="filled"
              color="secondary"
              fullWidth
              onChange={this.yearChange}
              name={this.state.year}
            />
          </div>
          <div style={{ margin: "1rem" }}>
            <Input
              label="V/NV"
              hint="Enter Your Choice"
              type="text"
              variant="filled"
              color="secondary"
              fullWidth
              onChange={this.v_nvChange}
              name={this.state.V_NV}
            />
          </div>

          <StyledButton
            type="submit"
            variant="outlined"
            size="large"
            href="./Register"
            className="text-center"
            style={{ margin: "10%" }}
          >
            Register
          </StyledButton>
        </form>
        <Redirect to={"/Register"} />
      </Layout>
    );
  }
}

export default Register;
