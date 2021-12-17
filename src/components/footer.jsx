import React, { Component } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
// import ArticleIcon from "@mui/icons-material/Article";
// import { NavLink } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <div class=" container-fluid bg-dark ">
          {/* <!-- Footer --> */}
          <footer class="bg-dark text-center text-white">
            {/* <!-- Grid container --> */}
            <div class="container p-4">
              {/* <!-- Section: Social media --> */}
              <div class="mb-3">
                <TwitterIcon />
                <FacebookIcon />
                <PinterestIcon />
                <InstagramIcon />
              </div>
              {/* <!-- Section: Social media --> */}

              {/* <!-- Section: Form --> */}
              <section class="">
                <form action="">
                  {/* <!--Grid row--> */}
                  <div class="row d-flex justify-content-center">
                    {/* <!--Grid column--> */}
                    <div class="col-auto">
                      <p class="pt-2">
                        <strong>Sign up for our newsletter</strong>
                      </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-md-5 col-12">
                      {/* <!-- Email input --> */}
                      <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="form5Example21"
                          class="form-control"
                        />
                        <label class="form-label" for="form5Example21">
                          Email address
                        </label>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div class="col-auto">
                      {/* <!-- Submit button --> */}
                      <button type="submit" class="btn btn-outline-light mb-4">
                        Subscribe
                      </button>
                    </div>
                    {/* <!--Grid column--> */}
                  </div>
                  {/* <!--Grid row--> */}
                </form>
              </section>
              {/* <!-- Section: Form --> */}

              {/* <!-- Section: Text --> */}
              <section class="mb-4">
                <p>
                  NGO: A non-governmental organization (NGO) is a non-profit,
                  citizen-based group that functions independently of
                  government. NGOs are often organized on local, national, and
                  up to the international levels to serve specific social or
                  political purposes.
                </p>
              </section>
              {/* <!-- Section: Text --> */}

              {/* <!-- Section: Links --> */}
              <section class="">
                {/* <!--Grid row--> */}
                <div class="row">
                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">About</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link to=" " className="text-white">
                          Causes
                        </Link>
                      </li>
                      <li>
                        <Link to="/home" className="text-white">
                          About
                        </Link>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          New Campaign
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Events
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Explore</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Blog Posts
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Social Connect
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Help Topics
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Links</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <Link to=" " className="text-white">
                          Podcasts
                        </Link>
                      </li>
                      <li>
                        <Link to=" " className="text-white">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to=" " className="text-white">
                          {" "}
                          Vedio
                        </Link>
                      </li>
                      <li>
                        <Link to=" " className="text-white">
                          {" "}
                          Terms of Use
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Contact</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          India
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Needhelp@Ngo.com
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          York
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          666 888 0000
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </section>
              {/* <!-- Section: Links --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div class="text-center p-3">
              © 2020 Copyright:
              <a class="text-white" href="https://oxpitan-gatsby.vercel.app/">
                Ngo-portal.com
              </a>
            </div>
            {/* <!-- Copyright --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>
      </div>
    );
  }
}

export default Footer;