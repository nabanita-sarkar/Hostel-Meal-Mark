import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        <h1> Welcome To MERN STACK application!</h1>
        <button>
          <a href="./Register">Register</a>
        </button>
        <button>
          <a href="./Mark">Mark</a>
        </button>
        <button>
          <a href="./Check">Check</a>
        </button>
      </div>
    );
  }
}
export default Home;
