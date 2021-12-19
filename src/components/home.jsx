import React, { Component } from "react";
import Footer from "../components/footer";
import Employee from "../images/employee.jpg";
import Help from "../images/help.jpg";
import Needy from "../images/need2jpg.jpg";
import Pic from "../images/img_1.jpg";
import Pic1 from "../images/img_2.jpg";
import Pic2 from "../images/images.jpg";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-dark " >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade opacity-50"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner pt-5 padding 20px">
              <div class="carousel-item active mx auto" data-bs-interval="1000">
                <img src={Pic} class="rounded w-90" height="500 " alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src={Pic1}
                  class="rounded w-90"
                  height="500"
                  width="765"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src={Pic2}
                  class="rounded w-90"
                  height="500"
                  width="765"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class=" row mt-5 " style={{ margin: "10px" }}>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={Employee} class="card-img-top " alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <pre>
                    "You have two hands.
                    <br />
                    One to help yourself, <br />
                    the second to help orthrs"
                  </pre>
                </p>
                {/* <a href="#" class="btn btn-primary"> */}
                <Link to="/employee/get" className="btn btn-primary">
                  Employee
                </Link>
              </div>
            </div>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={Needy} class="card-img-top" width="200px" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <pre>
                    "we can't help <br />
                    everyone but <br />
                    everyone can help <br />
                    someone"
                  </pre>
                </p>
                {/* <a href="#" class="btn btn-primary"> */}
                <Link to="/needypeople" className="btn btn-primary">
                  NeedyPeople
                </Link>
              </div>
            </div>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={Pic} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <pre>
                    "Don't turn away,
                    <br />
                    Give today!"
                    <br />
                    "Don't delay give today!"
                  </pre>
                </p>
                {/* <a href="#" class="btn btn-primary"> */}
                <Link to="/donor" className="btn btn-primary">
                  Donor
                </Link>
              </div>
            </div>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={Help} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  <pre>
                    “We make a living by what
                    <br />
                    we get, But we make a life
                    <br />
                    by what we give.”
                  </pre>
                </p>
                <a href="#" class="btn btn-primary">
                  Donation
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;