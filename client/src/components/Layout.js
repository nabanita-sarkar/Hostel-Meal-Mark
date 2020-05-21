import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { Row, Container, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import Hostel from "../assets/Hostel.jpeg";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            backgroundImage: `url(${Hostel})`,
            height: "100vh",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,153, 0.6)",
            backgroundAttachment: "fixed",
          }}
        >
          <Container>
            <Row
              style={{
                paddingTop: "10.3%",
                height: "100vh",
              }}
            >
              <Col>
                <Paper
                  elevation={3}
                  style={{
                    padding: "2%",
                    borderRadius: "20px",
                    alignSelf: "center",
                    maxwidth: "60%",
                  }}
                >
                  {this.props.children}
                </Paper>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Layout;
