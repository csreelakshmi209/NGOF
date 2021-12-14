import axios from "axios";
import React from "react";
import Joi from "joi-browser";
import EmployeeAddress from "./employeeaddress";
class AddEmployee extends React.Component {
  state = {
    employee: {
      employeeName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
        city: "",
        state: "",
        pin: "",
        landmark: "",
      },
    
    errors: {},
    errMsg: "Invalid input",
  };
  //validate 2nd step
  //define schema to validate input field values
  schema = {
    employeeName: Joi.string().min(3).max(20).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    phone: Joi.number().integer().min(5999999900).max(9999999999).required(),
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    pin: Joi.number().integer().min(111111).max(999999).required(),
    landmark: Joi.string().required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.employee, this.schema, {
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
    const employee = { ...this.state.employee };

    console.log(event.target.name); //name of field -fullname
    console.log(event.target.value); //value entered in the field
    //update local employee object values entered by user
    employee[event.target.name] = event.target.value;

    //update state object using setstate method
    this.setState({ employee: employee });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const employee={ 
    "employeeName": this.state.employee.employeeName,
    "email": this.state.employee.email,
    "phone": this.state.employee.phone,
    "username": this.state.employee.username,
    "password": this.state.employee.password,
    "address": {
        "city": this.state.employee.city,
        "state": this.state.employee.state,
        "pin": this.state.employee.pin,
        "landmark": this.state.employee.landmark}
    }
    //when user clicks on submit we have to post request to rest api

    axios
      .post("http://localhost:8080/employee/add", employee)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added employee " +
            this.state.employee.employeeName +
            " successfully!"
        );
        this.props.history.push("/employee/get");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //object destructuring
    const {
      employeeName,
      email,
      phone,
      username,
      password,
      city,
      state,
      pin,
      landmark,
    } = this.state.employee;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3>Add Employee</h3>
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
            <label htmlFor="employeeName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="employeeName"
              aria-describedby="emailHelp"
              value={employeeName}
              name="employeeName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.employeeName}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" class="form-label">
              Email id
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="phone" class="form-label">
              Phone number
            </label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              aria-describedby="emailHelp"
              value={phone}
              name="phone"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.phone}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="username" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              value={username}
              name="username"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.username}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" class="form-label">
              Password
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
          </div>
          {/* address */}
          <div className="mb-3">
            <label htmlFor="city" class="form-label">
              Enter the city
            </label>
            <input
              type="text"
              class="form-control"
              id="city"
              aria-describedby="emailHelp"
              value={city}
              name="city"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.city}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="state" class="form-label">
              Enter the state
            </label>
            <input
              type="text"
              class="form-control"
              id="state"
              aria-describedby="emailHelp"
              value={state}
              name="state"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.state}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="pin" class="form-label">
              Enter pincode
            </label>
            <input
              type="text"
              class="form-control"
              id="pin"
              aria-describedby="emailHelp"
              value={pin}
              name="pin"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.pin}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="landmark" class="form-label">
              Enter landmark
            </label>
            <input
              type="text"
              class="form-control"
              id="landmark"
              aria-describedby="emailHelp"
              value={landmark}
              name="landmark"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.landmark}</small>}
          </div>

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

export default AddEmployee;
