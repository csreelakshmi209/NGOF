import React from 'react';
import { Link,NavLink } from "react-router-dom";
import { connect } from "react-redux";
class EmployeeTable extends React.Component {
    
    render() { 
        const {employees,handleDelete} =this.props;
        return (
        <div>
            <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Username</th>
              {this.props.login.loggedIn &&
                this.props.login.role === "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {employees.map((s) => (
              <tr key={s.employeeId}>
                <td>{s.employeeId}</td>
                <td>{s.employeeName}</td>
                <td>{s.email}</td>
                <td>{s.phone}</td>
                <td>{s.username}</td>
                <td>{s.passoword}</td>
                {this.props.login.loggedIn && this.props.login.role === "admin" && (
                <td>
                <Link 
                    to={`/employee/get/address/${s.address.addressId}`}
                    className="btn btn-primary">Address Info
                  </Link>
                  <Link 
                    to={`/employee/update/${s.employeeId}`}
                    className="btn btn-primary">Update
                  </Link>
                 
                  
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(s.employeeId)}
                  >
                    Delete
                  </button>
                </td>
                )}
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
export default connect(mapStateToProps)(EmployeeTable);
//export default EmployeeTable;