import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link
import './Navbar.css';
import B1 from './B1.jpg';
import B2 from './B2.jpg';
import B3 from './B3.jpg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DW Shop</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                DW Shop
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link mx-lg-4" aria-current="page" href='#Home'>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-4" href='#Product'>
                    Product
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={B1}
              className="d-block w-100"
              alt="B1"
              style={{ height: "500px", width: "120px", marginTop: "4.3rem" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={B2}
              className="d-block w-100"
              alt="B2"
              style={{ height: "500px", width: "120px", marginTop: "4.3rem" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={B3}
              className="d-block w-100"
              alt="B3"
              style={{ height: "500px", width: "120px", marginTop: "4.3rem" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
