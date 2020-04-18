import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import { Row, Container, Col } from "react-bootstrap";
import Hostel from "../assets/Hostel.jpeg";
import StyledButton from "./Button";
import NavBar from "./NavBar";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          style={{
            backgroundImage: `url(${Hostel})`,
            height: "100%",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,153, 0.6)",
            backgroundAttachment: "fixed",
            justifyContent: "center",
          }}
        >
          <Container>
            <Row
              style={{
                paddingLeft: "10vw",
                paddingRight: "10vw",
                paddingTop: "10.3%",
                paddingBottom: "10.3%",
              }}
            >
              <Col
                lg={7}
                md={7}
                style={{
                  alignSelf: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "15%",
                  }}
                >
                  <h1 style={{ color: "white" }}>
                    Welcome To Meal Marking Site of Pritilata Chhatrinibas!
                  </h1>
                </div>
              </Col>
              <Col>
                <Paper
                  elevation={3}
                  style={{
                    padding: "1rem",
                    alignContent: "left",
                    borderRadius: "20px",
                  }}
                >
                  <StyledButton
                    variant="outlined"
                    size="large"
                    color="secondary"
                    href="./Register"
                    className="text-center"
                  >
                    Register
                  </StyledButton>
                  <StyledButton
                    variant="outlined"
                    size="large"
                    color="secondary"
                    href="./Mark"
                    className="text-center"
                  >
                    Mark
                  </StyledButton>
                  <StyledButton
                    variant="outlined"
                    size="large"
                    color="secondary"
                    href="./Check"
                    className="text-center"
                  >
                    Check
                  </StyledButton>
                </Paper>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Home;
