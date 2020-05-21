import React, { Component } from "react";
import axios from "axios";
// import { Redirect } from "react-router";
import {
  TextField as Input,
  RadioGroup,
  Radio,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import LuxonUtils from "@date-io/luxon";
import StyledButton from "./Button";
import Layout from "./Layout";

class Mark extends Component {
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
              variant="outlined"
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
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={this.yearChange}
              name={this.state.year}
            />
          </div>
          <div style={{ margin: "1rem" }}>
            <RadioGroup style={{ display: "block" }}>
              <FormControlLabel
                value="veg"
                control={<Radio />}
                label="Veg"
                onChange={this.v_nvChange}
              />
              <FormControlLabel
                value="non-veg"
                control={<Radio />}
                label="Non-Veg"
                onChange={this.v_nvChange}
              />
            </RadioGroup>
          </div>
          <div style={{ margin: "1rem" }}>
            <FormControlLabel
              style={{ marginLeft: "0rem" }}
              labelPlacement="start"
              control={
                <Switch
                  checked={this.state.checkedA}
                  // onChange={handleChange}
                  name="checkedA"
                />
              }
              label="Same for both Day and night?"
            />
          </div>
          {/* <div style={{ margin: "1rem" }}> */}
          <MuiPickersUtilsProvider utils={LuxonUtils}>
            <KeyboardDatePicker
              variant="inline"
              format="dd/MM/yyyy"
              style={{ margin: "1rem" }}
              // value={startDate}
            />

            <KeyboardDatePicker
              variant="inline"
              format="dd/MM/yyyy"
              style={{ margin: "1rem" }}
              // value={startDate}
            />
          </MuiPickersUtilsProvider>
          {/* </div> */}
          <StyledButton
            type="submit"
            variant="outlined"
            size="large"
            href="./Register"
            className="text-center"
            style={{ margin: "5%" }}
          >
            Mark
          </StyledButton>
        </form>
      </Layout>
    );
  }
}

export default Mark;
