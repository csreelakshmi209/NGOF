import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import DonorTable from './donortable';
import DonorAddress from './donoraddress';
class Donor extends React.Component {
    state = {
        donors: [],
      };

    // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/donor/get`)
      .then((res) => {
        console.log(res);
        this.setState({ donors: res.data });
      })
      .catch((err) => console.log(err));
  }  
 

  handleDelete = (donorId) => { 
    axios
      .delete(`http://localhost:8080/donor/delete/${donorId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const donors = this.state.donors.filter(
          (s) => s.donorId !== donorId
        );
        this.setState({ donors: donors });
        alert(res.data.donorName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  
    render() { 
       return (
            <div>   <h1>Donor Details</h1>
            <div className="w-75 mx-auto" >
              <Link to="/donor/add" className="btn btn-info float-end">
                Add
              </Link>
              <DonorTable donors={this.state.donors} handleDelete={this.handleDelete}/>
             
            </div>
            </div>
          );
        
    }
}
 
export default Donor;