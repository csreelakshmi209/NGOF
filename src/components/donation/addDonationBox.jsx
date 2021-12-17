import axios from "axios";
import React from "react";
import Joi from "joi-browser";
class AddDonationBox extends React.Component {
    state = {
        box: {
           ngoName:"",
           accountNumber:"",
           totalCollection:"",
        },
        errors:{},
        errMsg:"Invalid input",
    };
    //define schema to validate input field values
    schema={
         ngoName: Joi.string().min(3).max(20).required(),
         totalCollection: Joi.number()
         .integer()
         .min(1000)
         .max(99999999999)
         .required(),
         accountNumber: Joi.string().min(3).max(20).required(),
         
    };
    // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.box, this.schema, {
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
    handleChange=(event) => {
        //copying state employee object to local variable employee
        const box={...this.state.box};
        
        console.log(event.target.name);         //name of field -fullname
        console.log(event.target.value);        //value entered in the field
         //update local employee object values entered by user
        box[event.target.name]=event.target.value;

        //update state object using setstate method
        this.setState({box:box});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        const box={ 
            "ngoName":this.state.box.ngoName,
            "totalCollection":this.state.box.totalCollection,
            "accountNumber":this.state.box.accountNumber
          }
       
        axios
        .post("http://localhost:8080/donationBox/add",box)
        .then((res) => {
        console.log(res.data);
        alert(
          "Added donor " + this.state.box.ngoName + " successfully!"
            );
        this.props.history.push("/donationBox");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
       
  render() {
      //object destructuring
      const {registrationNumber,ngoName,accountNumber,totalCollection}=this.state.box;
       
      const { errors, errMsg } = this.state;
    return (
        <div className="w-50 mx-auto ">
        <h3>ALl Donation Boxes Details</h3>
        {errMsg && (
          <div className="alert alert-danger" role="alert">
            {errMsg}
          </div>
        )}
        <form 
            onSubmit={this.handleSubmit} 
            className=" shadow p-3 mb-5 bg-body rounded mt-5 ">
            <div className="mb-3">
            <label htmlFor="registrationNumber" class="form-label">
             Registration Number
            </label>
            <input
              type="number"
              class="form-control"
              id="registrationNumber"
              aria-describedby="emailHelp"
              value={registrationNumber}
              name="registrationNumber"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.registrationNumber}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="ngoName" class="form-label">
              NGO Name
            </label>
            <input
              type="text"
              class="form-control"
              id="ngoname"
              aria-describedby="emailHelp"
              value={ngoName}
              name="ngoName"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.ngoName}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="accountNumber" class="form-label">
             Account Number
            </label>
            <input
              type="text"
              class="form-control"
              id="accountNumber"
              aria-describedby="emailHelp"
              value={accountNumber} 
              name="accountNumber"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.accountNumber}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="totalCollection" class="form-label">
             Total Collection
            </label>
            <input
              type="number"
              class="form-control"
              id="totalCollection"
              aria-describedby="emailHelp"
              value={totalCollection}
              name="totalCollection"
              onChange={this.handleChange}
            />
              {errors && <small>{errors.totalCollection}</small>}
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

export default AddDonationBox;
