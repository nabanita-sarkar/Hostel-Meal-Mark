import React, { Component } from "react";
import axios from "axios";
import {
  Table,
  TableBody as Tbody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import Layout from "../Layout";

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/check").then((res) => {
      console.log(res);
      this.setState({ users: res.data });
    });
  }
  render() {
    var data = this.state.users;

    return (
      <Layout>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Year</b>
              </TableCell>
              <TableCell>
                <b>Veg or Non-Veg</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <Tbody>
            {data.map((user, i) => {
              return (
                <TableRow>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.year}</TableCell>
                  <TableCell>{user.V_NV}</TableCell>
                </TableRow>
              );
            })}
          </Tbody>
        </Table>
      </Layout>
    );
  }
}

export default Check;
