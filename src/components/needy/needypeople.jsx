import React, { Component } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import InfoIcon from "@mui/icons-material/Info";
import AddCardIcon from "@mui/icons-material/AddCard";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Footer from "../footer";
import axios from "axios";
import { Link } from "react-router-dom";
import nhelp from "../../images/nhelp.png";
import donorimg from "../../images/donarpage.jpg";

class NeedyPeople extends React.Component {
  state = {
    needyPeople: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/needy/get`)
      .then((res) => {
        console.log(res);
        this.setState({ needyPeople: res.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (id) => {
    //axios.delete("http://localhost:8082/students/" + rollNo);
    axios
      .delete(`http://localhost:8080/needy/delete/${id}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const needyPeople = this.state.needyPeople.filter(
          (n) => n.needyPersonId !== id
        );
        this.setState({ needyPeople: needyPeople });
        alert("Deleted successfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className=" w-100 p-10 bg-info">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>{" "}
                <h1>
                  <marque>Our ngo will always here for you</marque>
                </h1>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div className="w-100 " style={{ height: "100" }}>
          <img src={nhelp} alt="" width="180" className="float-start" />
          {/* <img src={donorimg} alt="" width="800" className="float-start" /> */}
        </div>
        <div>
          <h1>
            <pre>
              <br />
              <em>
                “Good actions give strength to ourselves <br />
                and inspire good actions in others."
              </em>
              <br />
              <br />
            </pre>
          </h1>
        </div>
        <Link to="/requestforhelp" className="btn btn-success float-end ">
          <AddCardIcon />
          Request for help
        </Link>
        <Link to="/needypeople/add" className="btn btn-danger  float-end">
          <AddCardIcon />
          Add
        </Link>
        <div className="w-100 mx-auto ">
          <table className="table  table-success table-striped table-hover">
            <thead>
              <tr>
                <th>NeedyPersonId</th>
                <th>NeedyPersonName</th>
                <th>Phone</th>
                <th>FamilyIncome</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.needyPeople.map((n) => (
                <tr key={n.needyPersonId}>
                  <td>{n.needyPersonId}</td>
                  <td>{n.needyPersonName}</td>
                  <td>{n.phone}</td>
                  <td>{n.familyIncome}</td>
                  <td>
                    <Link
                      to={`/needypeople/update/${n.needyPersonId}`}
                      className="btn btn-outline-secondary btn-sm "
                    >
                      <SystemUpdateIcon />
                      Update
                    </Link>
                    <Link
                      to={`/needypeople/address/${n.address.addressId}`}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      <InfoIcon />
                      More Info
                    </Link>
                    <Button
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => this.handleDelete(n.needyPersonId)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NeedyPeople;