import axios from "axios";
import React from 'react';
class UpdateDonor extends React.Component {
    state = {
        donor: {
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
    };
    componentDidMount()
    {
        axios
            .get(`http://localhost:8080/donor/id/${this.props.match.params.donorId}`)
            .then(res=>{
                console.log(res.data);
                this.setState({donor :res.data});
            })
            .catch((err)=> console.log(err));
    }
    handleChange=(event) => {
        //copying state employee object to local variable employee
        const donor={...this.state.donor};
        
        console.log(event.target.name);         //name of field -fullname
        console.log(event.target.value);        //value entered in the field
         //update local employee object values entered by user
        donor[event.target.name]=event.target.value;

        //update state object using setstate method
        this.setState({donor:donor});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        const donor={ 
            "donorName": this.state.donor.donorName,
            "donorEmail": this.state.donor.donorEmail,
            "donorPhone": this.state.donor.donorPhone,
            "donorUsername": this.state.donor.donorUsername,
            "donorPassword": this.state.donor.donorPassword,
            "address": {
                "city": this.state.donor.city,
                "state": this.state.donor.state,
                "pin": this.state.donor.pin,
                "landmark": this.state.donor.landmark}
            }
        //when user clicks on submit we have to post request to rest api
        axios
        .put(`http://localhost:8080/donor/update/${this.props.match.params.donorId}`, donor)
        .then((res) => {
        console.log(res.data);
        alert(
          "Updated donor " + this.state.donor.donorName + " successfully!"
            );
        this.props.history.push("/donor");
      })
      .catch((err) => console.log(err));
  };
    render() { 
         //object destructuring
         const {donorName, donorEmail, donorPhone, donorUsername, donorPassword,city,state,pin,landmark}=this.state.donor;

      
        return <div>
            <h1>Update Donor Details</h1>
            <form 
            onSubmit={this.handleSubmit} 
            className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-5 ">
          
          <div className="mb-3">
            <label htmlFor="donorName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="donorName"
              aria-describedby="emailHelp"
              value={donorName}
              name="donorName"
              onChange={this.handleChange}
            />
             
          </div>

          <div className="mb-3">
            <label htmlFor="donorEmail" class="form-label">
              Email id
            </label>
            <input
              type="email"
              class="form-control"
              id="donorEmail"
              aria-describedby="emailHelp"
              value={donorEmail}
              name="donorEmail"
              onChange={this.handleChange}
            />
              
          </div>

          <div className="mb-3">
            <label htmlFor="donorPhone" class="form-label">
              Phone number
            </label>
            <input
              type="tel"
              class="form-control"
              id="donorPhone"
              aria-describedby="emailHelp"
              value={donorPhone}
              name="donorPhone"
              onChange={this.handleChange}
            />
             
          </div>

          <div className="mb-3">
            <label htmlFor="donorUsername" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="donorUsername"
              aria-describedby="emailHelp"
              value={donorUsername}
              name="donorUsername"
              onChange={this.handleChange}
            />
             
          </div>

          <div className="mb-3">
            <label htmlFor="donorPassword" class="form-label">
              Password
            </label>
            <input 
            type="password" 
            class="form-control" 
            id="donorPassword"
            value={donorPassword} 
            name="donorPassword"
            onChange={this.handleChange}
            />
              
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
             
          </div>

          <div className="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        </div>;
    }
}
 
export default UpdateDonor;