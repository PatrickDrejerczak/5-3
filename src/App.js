import "./App.css";
import React from "react";
import { useState } from "react";
import Result from "./components/Result";
import Buttonjsx from "./components/Button";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [formData, setFormData] = useState({});
  const [count, setCount] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const handleAdd = (value) => {
    setCount(count + value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Success!");
      console.log(formData);
    }
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div className="counter">
        <div>
          <h2>Demo useState</h2>
        </div>
        <br />
        <div>
          <Result count={count} />
        </div>
        <br />
        <div>
          <Buttonjsx
            className="subtraction"
            handleAdd={handleAdd}
            value={-10}
          />
          <Buttonjsx handleAdd={handleAdd} value={-1} />
          <Buttonjsx handleAdd={handleAdd} value={+1} />
          <Buttonjsx handleAdd={handleAdd} value={+10} />
        </div>
        <br />
        <br />
      </div>
      <div className="wrapper">
        <h2>Demo form</h2>
        <br />
        <Form onSubmit={handleSubmit} id="formData">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name:</Form.Label>
            <Form.Control
              id="name"
              name="name"
              onChange={handleOnChange}
              type="text"
              placeholder="Enter your Name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="age">Age</Form.Label>
            <Form.Control
              id="age"
              name="age"
              onChange={handleOnChange}
              type="number"
              placeholder="Enter your Age"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="dateOfBirth">Date of Birth</Form.Label>
            <br />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              handleChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="gender">Gender</Form.Label>
            <br />
            <select id="gender" name="gender" onChange={handleOnChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>{" "}
            </select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              onChange={handleOnChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
            <Form.Control
              type="number"
              id="phone"
              name="phone"
              onChange={handleOnChange}
              placeholder="Enter Phonenumber"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="essay">Essay</Form.Label>
            <br />
            <textarea
              rows="10"
              cols="40"
              id="essay"
              name="essay"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              name="password"
              onChange={handleOnChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleOnChange}
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button className="btn-form" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
