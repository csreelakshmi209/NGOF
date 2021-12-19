import React from "react";
import logo from "../images/ngologo.jpg";
import donateNow from "../images/donatenow.jpg";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LockOpenTwoToneIcon from "@mui/icons-material/LockOpenTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ArticleIcon from "@mui/icons-material/Article";
const Nav = () => {
  return (
    <div>
      <div class="w-30  mb-5px ">
        <div class="float-end">
          <TwitterIcon />
          <FacebookIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-default w-30">
        <div className="container-fluid">
          <NavLink class="navbar-brand justify-center " to="/home">
            <img src={logo} alt="" width="40" />
          </NavLink>

          <b class="navbar-brand fs-3">NGO PORTAL</b>
          <NavLink class="navbar-brand justify-center " to="/donatenow">
            <img src={donateNow} alt="" width="180" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                  <HomeIcon />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                  <SupervisorAccountRoundedIcon />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employee/get">
                  Pages
                  <ArticleIcon />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Register
                  <HowToRegIcon />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Login
                  <LockOpenTwoToneIcon />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;