import React, { Component } from "react";
import axios from "axios";

class UpdateRequestForHelp extends React.Component {
  state = {
    requests: {
      needyPersonName: "",
      phone: "",
      item: "",
      status: "",
    },
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/request/remove/${this.props.match.params.requestId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ requests: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    //logic to update state object
    //copying state employee object to local variable employee
    const requests = { ...this.state.requests };

    console.log(event.target.name); //name of field -fullname
    console.log(event.target.value); //value entered in the field
    //update local needy person object values entered by user
    requests[event.target.name] = event.target.value;

    //update state object using setstate method
    this.setState({ requests: requests });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const requests = {
      needyPersonName: this.state.requests.needyPersonName,
      phone: this.state.requests.phone,
      item: this.state.requests.item,
      status: this.state.requests.status,
    };
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/update/${this.props.match.params.requestId}`,
        requests
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated " + this.state.requests.needyPersonName + " successfully!"
        );
        this.props.history.push("/needypeople");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { needyPersonName, phone, item, status } = this.state.requests;

    return (
      <div className="w-50 mx-auto ">
        <h3>Update request </h3>
        <form
          onSubmit={this.handleSubmit}
          className="shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="needyPersonName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="needyPersonName"
              aria-describedby="emailHelp"
              value={needyPersonName}
              name="needyPersonName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              value={phone}
              name="phone"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="item" class="form-label">
              item
            </label>
            <input
              type="text"
              class="form-control"
              id="item"
              aria-describedby="emailHelp"
              value={item}
              name="item"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="item" class="form-label">
              status
            </label>
            <input
              type="text"
              class="form-control"
              id="status"
              aria-describedby="emailHelp"
              value={status}
              name="status"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateRequestForHelp;