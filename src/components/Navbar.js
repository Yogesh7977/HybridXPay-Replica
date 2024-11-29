import React from "react";
import hybridx from "../images/hybridx-logo.png";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{height:"90px",width:"-webkit-fill-available",top:"0",position:"sticky", zIndex:"1000"}}>
      <nav className="navbar navbar-expand-lg" style={{height:"100%"}}>
        <div className="container-fluid">
        <div className="container">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img
              src={hybridx}
              alt="Logo"
              className="navbar-logo"
              style={{maxHeight:"100%"}}
            />
          </a>
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
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" style={{height:"100%"}}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex" style={{fontSize:"1.25rem"}}>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Our Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
            </div>          
          </div>
        </div>
      </div>
      </nav>
    </div>
  );
};

export default Navbar;
