import React, { Component } from "react";
// import { Typography } from "@material-ui/core";
import { Row, Container, Col, CardGroup, Card } from "react-bootstrap";
import Hostel from "../assets/Hostel.jpeg";
import StyledButton from "../components/Button";
// import StyledCard from "../components/Card";
import Login from "./Login";

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
                paddingTop: "10%",
              }}
            >
              <Col
                style={{
                  alignSelf: "center",
                }}
              >
                <CardGroup>
                  <Card
                    // className={classes.card}
                    style={{
                      padding: "2rem 1rem 2rem 1rem",
                      // borderRadius: "20px 0 0 20px",
                      backgroundColor: "rgba(255,255,255,0.8)",
                      textAlign: "center",
                    }}
                  >
                    <h1 style={{ color: "#2C2C2C" }}>
                      Welcome To Meal Marking Site of Pritilata Chhatrinibas!
                    </h1>
                  </Card>
                  <Card
                    style={{
                      padding: "2rem 1rem 2rem 1rem",
                      // borderRadius: "0 20px 20px 0",
                    }}
                  >
                    <h3 className="text-center" style={{ color: "#2C2C2C" }}>
                      Already a Boarder?
                    </h3>
                    <Login />
                    <div
                      style={{
                        paddingTop: "1rem",
                      }}
                    >
                      <h3 className="text-center" style={{ color: "#2C2C2C" }}>
                        New to Pritilata Chhatrinibas?
                      </h3>
                      <div>
                        <Row
                          style={{
                            alignItems: "center",
                          }}
                        >
                          <Col className="col-lg-6 col-12 justify-content-end">
                            <h5
                              className="text-lg-right text-center"
                              style={{ margin: "0", color: "#2C2C2C" }}
                              // className="d-flex"
                            >
                              Create an account
                            </h5>
                          </Col>
                          <Col className="text-lg-left text-center">
                            <StyledButton
                              variant="outlined"
                              color="secondary"
                              href="./Register"
                              style={{
                                display: `inlineBlock`,
                              }}
                            >
                              Register
                            </StyledButton>
                          </Col>
                        </Row>
                      </div>
                    </div>

                    {/* <StyledButton
                    variant="outlined"
                    color="secondary"
                    href="./Dashboard"
                  >
                    Dashboard
                  </StyledButton> */}
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Home;
