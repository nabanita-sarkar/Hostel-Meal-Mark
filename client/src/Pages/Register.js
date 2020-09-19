import React, { Component } from "react";
import { Input } from "react-rainbow-components";
import PasswordInput from "../components/Register/Password";
import Department from "../components/Register/Department";
import Degree from "../components/Register/Degree";
import Year from "../components/Register/Year";
import FormLabel from "@material-ui/core/FormLabel";
import StyledButton from "../components/Button";
import Toggle from "../components/Register/Toggle";
import Layout from "../components/Layout";

class Register extends Component {
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

export default Register;
