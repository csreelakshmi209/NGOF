import React from 'react';
import { Link,NavLink } from "react-router-dom";
import { connect } from "react-redux";
class DonationBoxTable extends React.Component {
    
    render() { 
        const {boxes,handleDelete} =this.props;
        return (
        <div>
            <table className="table">
          <thead>
            <tr>
            <th>RegistrationNumber</th>
            <th>NGO name</th>
            <th>account number</th>
            <th>total collection</th>
            {this.props.login.loggedIn &&
                this.props.login.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {boxes.map((s) => (
              <tr key={s.registrationNumber}>
                <td>{s.registrationNumber}</td>
                <td>{s.ngoName}</td>
                <td>{s.accountNumber}</td>
                <td>{s.totalCollection}</td>
                <td>
                  <Link 
                    to={`/donationBox/update/${s.registrationNumber}`}
                    className="btn btn-primary">Update
                  </Link>
                </td>
                
                  {this.props.login.loggedIn && this.props.login.role === "admin" && (
                    <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(s.registrationNumber)}>
                    Delete
                  </button>
                </td>)} 
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        );
    }
}
 // funtion to get updates from store
 const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(DonationBoxTable);



