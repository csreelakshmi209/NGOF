import axios from "axios";
import React from "react";
import Joi from "joi-browser";
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
class AddDonation extends React.Component {
    state = {
        donation: {
           donationAmount:"",
           donationDate:"",
           itemDescription:"",
           donationType:"",
           donorName: "",
           donorEmail:"",
           donorPhone:"",
           donorUsername:"",
           donorPassword:"",
             city:"",
             state:"",
             pin:"",
             landmark:""
        },
        errors:{},
        errMsg:"Invalid input",
    };
    //validate 2nd step
    //define schema to validate input field values
    schema={
        donationAmount: Joi.number()
        .integer()
        .min(1)
        .max(99999999)
        .required(),
        donationDate: Joi.string().required(),
        itemDescription:Joi.string().min(3).max(20).required(),
         donationType:Joi.string().min(3).max(20).required(),
        donorName: Joi.string().min(3).max(20).required(),
        donorEmail: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
        donorPhone: Joi.number()
        .integer()
        .min(6000000000)
        .max(9999999999)
        .required(),
        donorUsername: Joi.string().min(3).max(20).required(),
         donorPassword: Joi.string().min(3).required(),
        city:Joi.string().required(),
         state:Joi.string().required(),
         pin:Joi.number().integer().min(111111).max(999999).required(),
         landmark:Joi.string().required(),
        
         
    };
    // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.donation, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
  
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
    handleChange=(event) => {
        //logic to update state object
        //copying state employee object to local variable employee
        const donation={...this.state.donation};
        
        console.log(event.target.name);         //name of field -fullname
        console.log(event.target.value);        //value entered in the field
         //update local employee object values entered by user
        donation[event.target.name]=event.target.value;

        //update state object using setstate method
        this.setState({donation:donation});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        const donation={
             "donationAmount": this.state.donation.donationAmount,
             "donationDate": this.state.donation.donationDate,
             "donor": {
                 "donorName": this.state.donation.donorName,
                 "donorEmail": this.state.donation.donorEmail,
                 "donorPhone": this.state.donation.donorPhone,
                 "donorUsername": this.state.donation.donorUsername,
                 "donorPassword": this.state.donation.donorPassword,
                 "address": {
                     "city": this.state.donation.city,
                     "state": this.state.donation.state,
                     "pin": this.state.donation.pin,
                     "landmark": this.state.donation.landmark}
                     },
             "item": {
                 "itemDescription": this.state.donation.itemDescription,
                 "donationType": this.state.donation.donationType
             }
        }
        //when user clicks on submit we have to post request to rest api

        this.setState({ errors: this.validate() });
        console.log(this.state.errors);
        if (this.state.errors) return;
        axios
        .post("http://localhost:8080/donation/add", donation)
        .then((res) => {
        console.log(res.data);
        alert(
          "Added donation  type " + donation.donationType+ " successfully!"
            );
        this.props.history.push("/donation/get");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
       
  render() {
      //object destructuring
      const {donationAmount, donationDate,
      itemDescription,
     donationType,
      donorName,
      donorEmail,
      donorPhone,
      donorUsername,
      donorPassword,
        city,
        state,
        pin,
        landmark
   }=this.state.donation;
      const { errors, errMsg } = this.state;
    return (
        <div className="w-50 mx-auto ">
        <h1>Donation details</h1>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form 
            onSubmit={this.handleSubmit} 
            className=" shadow p-3 mb-5 bg-body rounded mt-5 ">
          
          <div className="mb-3">
            <label htmlFor="donationAmount" class="form-label">
             Donation amount
            </label>
            <input
              type="number"
              class="form-control"
              id="donationAmount"
              aria-describedby="emailHelp"
              value={donationAmount}
              name="donationAmount"
              onChange={this.handleChange}
            />
             {errors && <small>{errors.donationAmount}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="donationDate" class="form-label">
              Donation date
            </label>
            <input
              type="date"
              class="form-control"
              id="donationDate"
              aria-describedby="emailHelp"
              value={donationDate}
              name="donationDate"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donationDate}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="itemDescription" class="form-label">
              Item Description
            </label>
            <input
              type="text"
              class="form-control"
              id="itemDescription"
              aria-describedby="emailHelp"
              value={itemDescription}
              name="itemDescription"
              onChange={this.handleChange}
            />
             {errors && <small>{errors.itemDescription}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="donationType" class="form-label">
             DonationType
            </label>
            <input
              type="text"
              class="form-control"
              id="donationType"
              aria-describedby="emailHelp"
              value={donationType}
              name="donationType"
              onChange={this.handleChange}
            />
             {errors && <small>{errors.donationType}</small>}
          </div>
          {/* <FormControl variant="filled" fullWidth>
              <InputLabel id="donationType">Type</InputLabel>
          <Select
                labelId="demo-simple-select-filled-label"
                id="donationType"
              >
                <MenuItem value="donationType">
                  
                </MenuItem>
                <MenuItem value="donationType">CLOTHS</MenuItem>
                <MenuItem value="donationType">BOOKS</MenuItem>
                <MenuItem value="donationType">EDIBLE</MenuItem>
                <MenuItem value="donationType">OTHER</MenuItem>
              </Select>
              </FormControl> */}
          {/* donor */}
          <div className="mb-3">
            <label htmlFor="donorName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="donorName"
              aria-describedby="emailHelp"
             
              name="donorName"
              onChange={this.handleChange}
            />
             {errors && <small>{errors.donorName}</small>}
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
              value={donorEmail}
              name="donorEmail"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donorEmail}</small>}
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
              value={donorPhone}
              name="donorPhone"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donorPhone}</small>}
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
              value={donorUsername}
              name="donorUsername"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.donorUsername}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" class="form-label">
              Password
            </label>
            <input 
            type="password" 
            class="form-control" 
            id="password"
            value={donorPassword} 
            name="donorPassword"
            onChange={this.handleChange}
            />
              {errors && <small>{errors.donorPassword}</small>}
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

export default AddDonation;
