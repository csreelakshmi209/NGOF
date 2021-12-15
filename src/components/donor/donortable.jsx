import React from 'react';
import { Link,NavLink } from "react-router-dom";

class DonorTable extends React.Component {
    render() { 
        const {donors,handleDelete} =this.props;
        return <div>
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
                  {donors.map((s) => (
                    <tr key={s.donorId}>
                      <td>{s.donorId}</td>
                      <td>{s.donorName}</td>
                      <td>{s.donorEmail}</td>
                      <td>{s.donorPhone}</td>
                      <td>{s.donorUsername}</td>
                      <td>
                      <Link 
                      to={`/donor/get/address/${s.address.addressId}`}
                       className="btn btn-primary">Address Info
                      </Link>
                        <Link 
                          to={`/donor/update/${s.donorId}`}
                          className="btn btn-primary">Update
                        </Link>
                        
                        <button
                          className="btn btn-danger"
                          onClick={() => this.handleDelete(s.donorId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>;
    }
}
 
export default DonorTable;
