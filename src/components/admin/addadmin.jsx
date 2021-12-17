import axios from "axios";
import React from "react";
import Joi from "joi-browser";

class AddAdmin extends React.Component {
  state = {
    admin:{
        adminUsername:"",
        adminPassword:"",
        // username:"",
        // password:"",
        // role:"",
    //     "adminId": 222,
    // "adminUsername": "SREELAKSHMI",
    // "adminPassword": "1234512345",
    // "login": {
    //     "loginId": 223,
    //     "username": "ABCD",
    //     "password": "12345678",
    //     "role": "employee",
    // //     "loggedIn": false
    // }
    },
    
    errors: {},
    errMsg: "Invalid input",
  };
  //define schema to validate input field values
  schema = {
    adminUsername: Joi.string().min(3).max(20).required(),
    adminPassword: Joi.string().min(3).required(),
    // role: Joi.string().min(3).max(20).required(),
    // username: Joi.string().min(3).max(20).required(),
    // password: Joi.string().min(3).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.admin, this.schema, {
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
    //copying state employee object to local variable employee
    const admin = { ...this.state.admin };

    console.log(event.target.name); //name of field -fullname
    console.log(event.target.value); //value entered in the field
    //update local employee object values entered by user
    admin[event.target.name] = event.target.value;

    //update state object using setstate method
    this.setState({ admin: admin });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // const admin={
    //     "adminUsername":this.state.admin.adminUsername,
    //     "adminPassword":this.state.admin.adminPassword,
    //     "login":{
    //         "username":this.state.admin.username,
    //       "password":this.state.admin.username,
    //        "role":this.state.admin.role
        
    //     }
    // }
    //when user clicks on submit we have to post request to rest api

    axios
      .post("http://localhost:8080/admin/add", this.state.admin)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added admin " +
            this.state.admin.adminUsername +
            " successfully!"
        );
        // this.props.history.push("/employee/get");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //object destructuring
    const {
      adminUsername,adminPassword
    } = this.state.admin;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3>Add Admin</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          onSubmit={this.handleSubmit}
          className=" shadow p-3 mb-5 bg-body rounded mt-5 "
        >
          <div className="mb-3">
            <label htmlFor="adminUsername" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="adminUsername"
              aria-describedby="emailHelp"
              value={adminUsername}
              name="adminUsername"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.adminUsername}</small>}
          </div>


          <div className="mb-3">
            <label htmlFor="adminPassword" class="form-label">
              Password
            </label>
            <input
              type="adminPassword"
              class="form-control"
              id="adminPassword"
              value={adminPassword}
              name="adminPassword"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.adminPassword}</small>}
          </div>
          {/* <div className="mb-3">
            <label htmlFor="password" class="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.password}</small>}
          </div> */}
          

          <div className="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddAdmin;
