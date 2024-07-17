import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Login() {
  return (
    <>
      <h1>Employee Login</h1>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    </>
  );
}

export default Login;
