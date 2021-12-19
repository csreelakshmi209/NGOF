import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { connect } from "react-redux";
import Button from "@mui/material/Button";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import DeleteIcon from "@mui/icons-material/Delete";
class RequestForHelpTable extends React.Component {
  render() {
    const { requests, handleDelete } = this.props;
    return (
      <div>
        <table className="table  table-success table-striped table-hover">
          <thead>
            <tr className="table-active">
              <th>RequestId</th>
              <th>NeedyPersonName</th>
              <th>phone</th>
              <th>Item</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr>
                <td>{r.requestId}</td>
                <td>{r.needyPersonName}</td>
                <td>{r.phone}</td>
                <td>{r.item}</td>
                <td>{r.status}</td>
                <td>
                  <Link
                    to={`/request/update/${r.requestId}`}
                    className="btn btn-outline-secondary btn-sm "
                  >
                    <SystemUpdateIcon />
                    Update
                  </Link>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(r.requestId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RequestForHelpTable;