import React from "react";
import { Container, Row, Col } from "reactstrap";
import Login from "./login/Login";

function Auth() {
  return (
    <>
      <Container>
        <Row>
          <Col md="6">
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Auth;
