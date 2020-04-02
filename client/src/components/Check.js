import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/check").then(res => {
      console.log(res);
      this.setState({ users: res.data });
    });
  }
  render() {
    var data = this.state.users;

    return (
      <div>
        <table>
          {data.map((user, i) => {
            return (
              <div>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.year}</td>
                  <td>{user.V_NV}</td>
                </tr>
              </div>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Check;
