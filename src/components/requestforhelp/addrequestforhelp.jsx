import React from "react";
import axios from "axios";
import Joi from "joi-browser";
class AddRequestForHelp extends React.Component {
  state = {
    requests: {
      needyPersonName: "",
      phone: "",
      item: "",
      distributionstatus: "PENDING",
    },
    errors: {},
    errMsg: "",
  };

  // define schema to validate input field values
  schema = {
    needyPersonName: Joi.string().min(3).max(20).required(),
    phone: Joi.string().required().max(10),
    item: Joi.string().required(),
    distributionstatus: Joi.string().required(),
  };

  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.requests, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleChange = (event) => {
    //copying state employee object to local variable employee
    const requests = { ...this.state.requests };

    console.log(event.target.name); //name of field -fullname
    console.log(event.target.value); //value entered in the field
    //update local employee object values entered by user
    requests[event.target.name] = event.target.value;

    //update state object using setstate method
    this.setState({ requests: requests });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const requests = {
      needyPersonName: this.state.requests.needyPersonName,
      phone: this.state.requests.phone,
      item: this.state.requests.item,
      distributionstatus: this.state.requests.distributionstatus,
    };
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    // Send post request to rest api
    axios
      .post("http://localhost:8080/request/add", requests)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added person " +
            this.state.requests.needyPersonName +
            " successfully!"
        );
        this.props.history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { needyPersonName, phone, item, distributionstatus } =
      this.state.requests;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3>Request for help</h3>
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
            <select
              className="form-select text-center"
              aria-label="Default select example"
              value={this.item}
              name="item"
              onChange={this.handleChange}
            >
              <option selected>Select type</option>
              <option value="CLOTHS">CLOTHS</option>
              <option value="BOOKS">BOOKS</option>
              <option value="EDIBLE">EDIBLE</option>
              <option value="OTHER">OTHER</option>
            </select>
            {this.errors && <small>{this.errors.item}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="needyPersonName" className="form-label">
              distribution status
            </label>
            <input
              type="text"
              className="form-control"
              id=" distributionstatus"
              aria-describedby="emailHelp"
              value={distributionstatus}
              name=" distributionstatus"
              onChange={this.handleChange}
            />
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

export default AddRequestForHelp;