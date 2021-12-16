import React, { Component } from "react";
//import TextField from "@mui/material/TextField";
//import Box from "@mui/material/Box";

import { connect } from "react-redux";
import { loginAction } from "../actions/loginaction";
import { useHistory } from "react-router-dom";

import {
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import Joi from "joi-browser";

class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
      role: "",
    },
    errors: {},
  errMsg: "",
  };
  

  schema = {
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
  };
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.login, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties

    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = (event) => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // dispatch login action
    this.props.loginAction(this.state.user);
    console.log("handleSuccessfull");
    alert(" logged in successfully!");
    // Redirect to products page on successfull login
    if (this.props.login.loggedIn) {
        this.props.history.push("/employee/get");
      console.log("redirect Successfull");}
   
  };
 
  render() {
    const { errors, errMsg } = this.state;
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
        }}
      >
        <Typography variant="h5">Login Form</Typography>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
            </div>)}
        <Paper elevation={3}>
          <form
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
            padding={2}
          >
            <TextField
              id="filled-basic"
              label="Username"
              variant="filled"
              type="text"
              style={{ marginBottom: 10 }}
              fullWidth
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
              
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              fullWidth
              style={{ marginBottom: 10 }}
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <FormControl variant="filled" fullWidth>
              <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={this.state.role}
                name="role"
                onChange={this.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
                <MenuItem value="donor">donor</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Login);
