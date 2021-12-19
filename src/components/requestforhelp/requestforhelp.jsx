import React from "react";
import axios from "axios";
import helpi from "../../images/helpi.jpg";
import RequestForHelpTable from "./requestforhelptable";
import { Link } from "react-router-dom";
class RequestForHelp extends React.Component {
  state = {
    requests: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8080/request/getrequest")
      .then((res) => {
        console.log(res);
        this.setState({ requests: res.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log(" componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (requestId) => {
    axios
      .delete(`http://localhost:8080/request/remove/${requestId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const requests = this.state.requests.filter(
          (r) => r.requestId !== requestId
        );
        this.setState({ requests: requests });
        alert(res.data.needyPersonName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <div className="w-100 p-4" style={{ "background-color": "#eee" }}>
          <img src={helpi} className="float-end" alt="..." />
        </div>
        <div>
          <RequestForHelpTable
            requests={this.state.requests}
            handleDelete={this.handleDelete}
          />

          <div className="d-flex align-self-start mr-auto ">
            <Link
              to="/request/add"
              className="btn btn-info text-left float-end fixed-bottom "
              style={{ width: "100px", margin: "80px", padding: "10px" }}
            >
              Add
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestForHelp;