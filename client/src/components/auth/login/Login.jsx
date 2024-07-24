import React from "react";
import { Button, Container, FormGroup, Form, Input, Label } from "reactstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../environment/index";

function Login({ updateToken }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let bodyObj = JSON.stringify({
      email,
      password,
    });

    const url = `${baseURL}/employees/register`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOption = {
      headers,
      body: bodyObj,
      method: "POST",
    };

    try {
      const response = await fetch(url, requestOption);
      const data = await response.json();
      console.log(data);

      if (data.message === `Logged In: ${email}`) {
        console.log(` token: ${updateToken}`);
        updateToken(data.token);
        navigate("rooms");
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <FormGroup>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" innerRef={emailRef} />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            innerRef={passwordRef}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default Login;
