import React from 'react';
import { Link,NavLink } from "react-router-dom";
import axios from "axios";

class DonationDonor extends React.Component {
  state = {
    donor: {},
  };
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/donor/get/${this.props.match.params.donorId}`)
      .then((res) => {
        console.log(res);
        this.setState({ donor: res.data });
      })
      .catch((err) => console.log(err));
  }
    render() { 
        const {donor} =this.state;
        return (
        <div>
            <table className="table">
          <thead>
            <tr>
            <th>DonorId</th>
            <th>DonorName</th>
            <th>DonorEmail</th>
            <th>DonorPhone</th>
            <th>DonorUsername</th>
              
            </tr>
          </thead>
          <tbody>
            
          <tr key={donor.donorId}>
          <td>{donor.donorId}</td>
           <td>{donor.donorName}</td>
           <td>{donor.donorEmail}</td>
            <td>{donor.donorPhone}</td>
            <td>{donor.donorUsername}</td>
            <td>
            <Link 
             to={`/donor/get/address/${donor.addressId}`}
                 className="btn btn-primary">address Info
                </Link>   

            </td>
              </tr>
            
          </tbody>
        </table>
        </div>
        );
    }
}
 
export default DonationDonor;