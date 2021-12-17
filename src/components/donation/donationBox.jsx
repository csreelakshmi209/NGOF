import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DonationBoxTable from "./donationBoxTable";
import { connect } from "react-redux";
class DonationBox extends React.Component {
    state = { 
        boxes: [],
      };

      componentDidMount(){
          console.log("componentDidMount");
          axios
             .get(`http://localhost:8080/donationBox`)
             .then((res) => {
                 console.log(res);
                 this.setState({boxes: res.data});
                 })
                 .catch(err => console.log(err));
      };
      handleDelete = (registrationNumber) => { 
        axios
          .delete(`http://localhost:8080/donationBox/remove/${registrationNumber}`)
          .then((res) => {
            console.log(res);
            // Update front end parallely
            const boxes = this.state.boxes.filter(
              (s) => s.registrationNumber !== registrationNumber
            );
            this.setState({ boxes: boxes });
            alert(res.data.ngoName + " deleted succussfully!");
          })
          .catch((err) => console.log(err));
      };
    render() { 
        return (
            <div>   <h1>DonationBox Details</h1>
            <Link to="/donationBox/add" className="btn btn-info float-end">
                Add New DonationBox
              </Link>
             <DonationBoxTable boxes={this.state.boxes}  handleDelete={this.handleDelete}/>
            </div>
            
          );
    }
}

 
export default DonationBox;