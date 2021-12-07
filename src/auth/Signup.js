import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
const Swal = require("sweetalert2");
function Signup() {
  const userNameInput = useRef(null);
  const passWordInput = useRef(null);
  var requestData = {};
  const args = JSON.parse(document.getElementById("data").text);
  const navigate = useNavigate();
  const signupHere = (event) => {
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
    fetch("/signup", {
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
        } else if (data.result == "no2") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User exists!",
          });
        } else {
          navigate("/login");
        }
      });
  };
  return (
    <div>
      <h1>SIGNUP</h1>
      <Form onSubmit={signupHere}>
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

        <Button variant="primary" type="submit" onClick={signupHere}>
          Signup
        </Button>

        <h2>Already has an account? Login here</h2>
        <Button as={Link} to="/login">
          LOGIN IN
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
