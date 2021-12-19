import axios from "axios";
import Joi from "joi-browser";
import React, { Component } from "react";

class InsertBank extends React.Component {
  state = {
    bank: {
        bankName: "",
        cardNumber: "",
        amount:""
      },
    errors: {},
    errMsg: "",
  };
  // define schema to validate input field values
  schema = {
    

bankName: Joi.string().min(3).max(20).required(),
cardNumber: Joi.string().min(12).max(50).required(),
  amount:  Joi.string().min(3).max(20).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.bank, this.schema, {
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
    //logic to update state object
    // console.log(student);
    console.log(event.target.name); // name of field - fullName
    console.log(event.target.value); // value entered in the field -a
    // student[fullName] = a;
    // student.fullName = a;

    // copy state student object to local variable student
    const bank = { ...this.state.bank };

    // update local student object with values entered by user
    bank[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ bank: bank });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
   
    axios
      .post(`http://localhost:8080/insertBank`, this.state.bank)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added Bank " + this.state.bank.ngoId + " successfully!"
        );
        this.props.history.push("/getBank");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };

  render() {
    // Object Destructuring
    const {  bankName, cardNumber,amount} = this.state.bank;
    const { errors, errMsg } = this.state;
    return (
      <div className="w-50 mx-auto ">
        <h3 className="fw-bolder">Insert Bank</h3>
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
      <label htmlFor="bankName" className="form-label">
        BankName
      </label>
      <input
        type="text"
        className="form-control"
        id="bankName"
        aria-describedby="emailHelp"
        value={bankName}
        name="bankName"
        onChange={this.handleChange}
      />
      {errors && <small>{errors.bankName}</small>}
    </div>
            
         
    <div className="mb-3">
    <label htmlFor="cardNumber" className="form-label">
     CardNumber
    </label>
    <input
      type="text"
      className="form-control"
      id="cardNumber"
      aria-describedby="emailHelp"
      value={cardNumber}
      name="cardNumber"
      onChange={this.handleChange}
    />
    {errors && <small>{errors.cardNumber}</small>}
  </div>
  <div className="mb-3">
    <label htmlFor="amount" className="form-label">
    Amount
    </label>
    <input
      type="text"
      className="form-control"
      id="amount"
      aria-describedby="emailHelp"
      value={amount}
      name="amount"
      onChange={this.handleChange}
    />
    {errors && <small>{errors.amount}</small>}
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

export default InsertBank;