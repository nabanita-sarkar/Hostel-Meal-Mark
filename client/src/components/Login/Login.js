import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Input } from "react-rainbow-components";
import PasswordInput from "./Password";
import Department from "./Department";
import Degree from "./Degree";
import Year from "./Year";
import FormLabel from "@material-ui/core/FormLabel";
import StyledButton from "../Button";
import Toggle from "./Toggle";
import Layout from "../Layout";

class Login extends Component {
  render() {
    return (
      // <Container>
      // <Card className="m-5 p-5 align-center" style={{ borderRadius: 25 }}>
      <Layout>
        <FormLabel
          component="legend"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Name
        </FormLabel>
        <Input className="rainbow-p-around_medium " />
        <Department />
        <Degree />
        <Year />
        <FormLabel
          component="legend"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Are you a pure-veg?
        </FormLabel>
        <Toggle />
        <FormLabel
          component="legend"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Email
        </FormLabel>
        <Input className="rainbow-p-around_medium " />
        <FormLabel
          component="legend"
          style={{ color: "black", fontWeight: "bold", display: "inline" }}
        >
          Password
        </FormLabel>
        <PasswordInput />
        <StyledButton variant="outlined" color="secondary">
          Register
        </StyledButton>
      </Layout>
    );
  }
}

export default Login;
