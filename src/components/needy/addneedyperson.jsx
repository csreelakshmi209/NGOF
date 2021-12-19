import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import Address from "./address";

class AddNeedyPerson extends React.Component {
  state = {
    needyPerson: {
      needyPersonName: "",
      phone: "",
      familyIncome: "",
      city: "",
      state: "",
      pin: "",
      landmark: "",
    },
    errors: {},
    errMsg: "",
  };

  // define schema to validate input field values
  schema = {
    needyPersonName: Joi.string().min(3).max(20).required(),
    phone: Joi.string().required(),
    familyIncome: Joi.number().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    pin: Joi.number().integer().min(111111).max(999999).required(),
    landmark: Joi.string().required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.needyPerson, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = (event) => {
    //logic to update state object
    // console.log(student);
    // console.log(event.target.name); // name of field - fullName
    // console.log(event.target.value); // value entered in the field -a
    // student[fullName] = a;
    // student.fullName = a;

    // copy state student object to local variable student
    const needyPerson = { ...this.state.needyPerson };

    // update local student object with values entered by user
    needyPerson[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ needyPerson: needyPerson });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const needyPerson = {
      needyPersonName: this.state.needyPerson.needyPersonName,
      phone: this.state.needyPerson.phone,
      familyIncome: this.state.needyPerson.familyIncome,
      address: {
        city: this.state.needyPerson.city,
        state: this.state.needyPerson.state,
        pin: this.state.needyPerson.pin,
        landmark: this.state.needyPerson.landmark,
      },
    };
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    // Send post request to rest api
    axios
      .post("http://localhost:8080/needy/add", needyPerson)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added person " +
            this.state.needyPerson.needyPersonName +
            " successfully!"
        );
        this.props.history.push("/needypeople");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { needyPersonName, phone, familyIncome, city, state, pin, landmark } =
      this.state.needyPerson;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3>Add Needy Person</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form
          onSubmit={this.handleSubmit}
          className="shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="needyPersonName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="needyPersonName"
              aria-describedby="emailHelp"
              value={needyPersonName}
              name="needyPersonName"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.needyPersonName}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="familyIncome" className="form-label">
              Family Income
            </label>
            <input
              type="number"
              className="form-control"
              id="familyIncome"
              aria-describedby="emailHelp"
              value={familyIncome}
              name="familyIncome"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.familyIncome}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              value={phone}
              name="phone"
              onChange={this.handleChange}
            />
            {errors && <small>{errors.phone}</small>}
          </div>

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

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddNeedyPerson;