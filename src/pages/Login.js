/* import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { login, logout } from "../features/userSlice";
import { useLoginMutation } from "../features/TheApiSlice";

import jwt from "jsonjwttoken"

export default function Login() {

  // our local email state - taybat ba componenty login, initial value = object
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [userLogin, { isError, isLoading, data, error }] = useLoginMutation();

 /*  const globalUser = useSelector((state) => state.email.value); */

 /*  const dispatch = useDispatch();

  

  return (
    
    <>{JSON.stringify(data)}
    {JSON.stringify(error)}
      <Container>
        <Form onSubmit={(e) => {
              e.preventDefault();
              userLogin({ email, password });
            }} className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            value={email}
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
             value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button
            className="card-button"
            variant="primary"
            onClick={() => dispatch(login(email))}
          >
            Login
          </Button>
          <Button
            variant="primary"
            className="card-button"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        </Form>
        { {globalUser.email} }*/
      /*</Container>
    </>
  );
}
 */