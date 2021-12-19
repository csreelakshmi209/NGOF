import React, { Component } from "react";

import axios from "axios";
import Joi from "joi-browser";

import { Link } from "react-router-dom";

class Bank extends React.Component {
  state = {
    bank: [],
  };

  // class component life cycle methods
  componentDidMount(ngoId) {
    console.log("componentDidMount");
    axios
     .get(`http://localhost:8080/getBank`)
      .then((res) => {
        console.log(res);
        this.setState({ bank: res.data });
      })
      .catch((err) => console.log(err));
  }
 
  handleDelete = (ngoId) => {
    axios
     .delete(`http://localhost:8080/deleteBank/${ngoId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const bank= this.state.bank.filter((d) => d.ngoId !== ngoId);
        this.setState({ bank: bank });
        alert(res.data.ngoId + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.bank);
    return (
      <div className="w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
      <Link to="/insertBank" className="btn btn-info float-end">
     Insert
    </Link>

        <table className="table w-75 mx-auto shadow-sm p-3 mb-5 bg-body rounded ">
          <thead>
            <tr className="shadow-sm p-3 mb-5 bg-body rounded">
             <th>ngoId</th>
              <th>bankName</th>
              <th>cardNumber</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bank.map((d)=>
               <tr key={d.ngoId}>
                <td>{d.ngoId}</td>
                <td>{d.bankName}</td>
                <td>{d.cardNumber}</td>
                <td>{d.amount}</td>
                <td>
                  <Link to={`/updateBank/${d.ngoId}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(d.ngoId)}>
                    Delete
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Bank;