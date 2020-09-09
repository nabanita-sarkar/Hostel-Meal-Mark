import React, { Component } from "react";
// import { Paper } from "@material-ui/core";
import { Row, Container, Col } from "react-bootstrap";
import Hostel from "../assets/Hostel.jpeg";
import StyledButton from "./Button";
// import NavBar from "./NavBar";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <div
          style={{
            backgroundImage: `url(${Hostel})`,
            height: "100vh",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            backgroundColor: "rgba(0,0,100, 0.8)",
            backgroundAttachment: "fixed",
          }}
        >
          <Container>
            <Row
              style={{
                paddingTop: "20%",
                // paddingBottom: "10.3%",
              }}
            >
              <Col
                // lg={7}
                // md={7}
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "7vh",
                  }}
                >
                  <h1 style={{ color: "white" }}>
                    Welcome To Meal Marking Site of Pritilata Chhatrinibas!
                  </h1>
                </div>

                {/* <Paper
                  elevation={3}
                  style={{
                    padding: "1rem",
                    alignContent: "left",
                    borderRadius: "20px",
                  }}
                > */}
                <StyledButton
                  variant="outlined"
                  color="secondary"
                  href="./Register"
                >
                  Register
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  color="secondary"
                  href="./Login"
                >
                  Login
                </StyledButton>
                {/* <StyledButton
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
                  </StyledButton> */}
                {/* </Paper> */}
                <StyledButton
                  variant="outlined"
                  color="secondary"
                  href="./Dashboard"
                >
                  Dashboard
                </StyledButton>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Home;
