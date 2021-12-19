import React, { Component } from "react";
import axios from "axios";

class UpdateNeedyPerson extends React.Component {
  state = {
    needyPerson: {
      needyPersonName: "",
      phone: "",
      familyIncome: "",
      city: "",
      state: "",
      pin: "",
      landmark: "",
    },
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/needy/get/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ needyPerson: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (event) => {
    //logic to update state object
    //copying state employee object to local variable employee
    const needyPerson = { ...this.state.needyPerson };

    console.log(event.target.name); //name of field -fullname
    console.log(event.target.value); //value entered in the field
    //update local needy person object values entered by user
    needyPerson[event.target.name] = event.target.value;

    //update state object using setstate method
    this.setState({ needyPerson: needyPerson });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const needyPerson = {
      needyPersonName: this.state.needyPerson.needyPersonName,
      phone: this.state.needyPerson.phone,
      familyIncome: this.state.needyPerson.familyIncome,
      address: {
        city: this.state.needyPerson.city,
        state: this.state.needyPerson.state,
        pin: this.state.needyPerson.pin,
        landmark: this.state.needyPerson.landmark,
      },
    };
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8080/needy/update/${this.props.match.params.id}`,
        needyPerson
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated " + this.state.needyPerson.needyPersonName + " successfully!"
        );
        this.props.history.push("/needypeople");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { needyPersonName, phone, familyIncome, city, state, pin, landmark } =
      this.state.needyPerson;

    return (
      <div className="w-50 mx-auto ">
        <h3>Update Needy Person</h3>
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
            <label htmlFor="familyIncome" className="form-label">
              Family Income
            </label>
            <input
              type="number"
              className="form-control"
              id="familyIncome"
              aria-describedby="emailHelp"
              value={familyIncome}
              name="familyIncome"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              value={phone}
              name="phone"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city" class="form-label">
              Enter the city
            </label>
            <input
              type="text"
              class="form-control"
              id="city"
              aria-describedby="emailHelp"
              value={city}
              name="city"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="state" class="form-label">
              Enter the state
            </label>
            <input
              type="text"
              class="form-control"
              id="state"
              aria-describedby="emailHelp"
              value={state}
              name="state"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pin" class="form-label">
              Enter pincode
            </label>
            <input
              type="text"
              class="form-control"
              id="pin"
              aria-describedby="emailHelp"
              value={pin}
              name="pin"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="landmark" class="form-label">
              Enter landmark
            </label>
            <input
              type="text"
              class="form-control"
              id="landmark"
              aria-describedby="emailHelp"
              value={landmark}
              name="landmark"
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

export default UpdateNeedyPerson;