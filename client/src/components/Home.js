import React, { Component } from "react";
import { MDBBtn as Button, MDBLink as Link } from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <h1> Welcome To MERN STACK application!</h1>
        <Button outline rounded>
          <Link to="./Register" link>
            Register
          </Link>
        </Button>
        <Button rounded outline>
          <Link to="./Mark">Mark</Link>
        </Button>
        <Button rounded outline>
          <Link to="./Check">Check</Link>
        </Button>
      </div>
    );
  }
}
export default Home;
