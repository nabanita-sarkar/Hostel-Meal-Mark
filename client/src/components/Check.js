import React, { Component } from "react";
import axios from "axios";

import {
  MDBTable as Table,
  MDBTableBody as Tbody,
  MDBTableHead as Thead
} from "mdbreact";

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
        <Table>
          <Thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th> Veg or Non-Veg</th>
            </tr>
          </Thead>
          <Tbody>
            {data.map((user, i) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.year}</td>
                  <td>{user.V_NV}</td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    );
  }
}

export default Check;
