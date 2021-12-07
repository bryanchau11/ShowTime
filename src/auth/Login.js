import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
const Swal = require("sweetalert2");
function Login() {
  const userNameInput = useRef(null);
  const passWordInput = useRef(null);
  var requestData = {};

  const navigate = useNavigate();
  const loginHere = (event) => {
    console.log(userNameInput.current.value);
    console.log(passWordInput.current.value);
    event.preventDefault();
    if (
      userNameInput.current.value == "" ||
      passWordInput.current.value == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your username or password!",
      });
    } else {
      requestData = {
        username: userNameInput.current.value,
        password: passWordInput.current.value,
      };
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result == "no") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please correct your username or password!",
          });
        }
        if (data.result == "yes") {
          //navigate(`/index/${userNameInput.current.value}`)
          navigate("/index", {
            state: userNameInput.current.value,
          });
        }
        userNameInput.current.value = "";
        passWordInput.current.value = "";
      });
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <Form onSubmit={loginHere}>
        <Form.Group className="mb-3">
          <Form.Label>username </Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            ref={userNameInput}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passWordInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={loginHere}>
          Login
        </Button>

        <h2>Dont have an account? Sign up here</h2>
        <Button as={Link} to="/signup">
          SIGN UP
        </Button>
      </Form>
    </div>
  );
}

export default Login;
