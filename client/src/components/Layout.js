import React, { Component } from "react";
// import { Paper } from "@material-ui/core";
import { Row, Container, Col, Card } from "react-bootstrap";
// import NavBar from "./NavBar";
import Hostel from "../assets/Hostel.jpeg";

class Layout extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Hostel})`,
          // height: "100vh",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,100, 0.8)",
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <Row>
            <Col>
              <Card
                className="m-3 p-3 p-md-5 align-center"
                elevation={3}
                style={{
                  // padding: "2%",
                  borderRadius: "25px",
                  // alignSelf: "center",
                  // maxWidth: "60%",
                }}
              >
                {this.props.children}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Layout;
