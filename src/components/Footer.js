import React from "react";
import Logo from "../images/hybridx-inverseLogo.png";
import FooterStyle from "../CSS/Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <footer className="footer" style={{backgroundColor:"#09122c", paddingTop:"100px"}}>
     
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
          <img src={Logo} alt="logo" style={{ width: "250px" }}></img>
          <div className="footer-paragraph my-4">
          <p style={{color:"white", bottom:"20px", maxWidth:"270px", fontSize:"110%"}}>
            At HybridxPay, we are dedicated to fostering innovation and
            upholding excellence. Our mission is to empower businesses with
            streamlined payment processes, thereby establishing new benchmarks
            for digital payments.
          </p>
            </div>
          </div>

          <div className="col-lg-3" style={{color:"white"}}>
          <h3>Menu</h3>
          <ul style={{listStyle:"none",paddingLeft:"0"}}>
            <li className="my-4">
              <Link className={`linkw ${FooterStyle.linkw}`} to="/">Home</Link>
            </li>
            <li className="my-4">
              <Link to="/about" className={`linkw ${FooterStyle.linkw}`}>About</Link>
            </li>
            <li className="my-4">
              <Link to="/products" className={`linkw ${FooterStyle.linkw}`}>Our Products</Link>
            </li>
            <li className="my-4">
              <Link to="/contact" className={`linkw ${FooterStyle.linkw}`}>Contact</Link>
            </li>
          </ul>
          </div>

          <div className="col-lg-3" style={{color:"white"}}>
          <h3>Quick Links</h3>
          <ul style={{listStyle:"none",paddingLeft:"0"}}>
            <li className="my-4">
              <Link to="/privacypolicy" className={`linkw ${FooterStyle.linkw}`}>Privacy Policy</Link>
            </li>
            <li className="my-4">
              <Link to="/terms" className={`linkw ${FooterStyle.linkw}`}>Terms & Condition</Link>
            </li>
            <li className="my-4">
              <Link to="/refundPolicy" className={`linkw ${FooterStyle.linkw}`}>Refund Policy</Link>
            </li>
          </ul>
          </div>

          <div className="col-lg-3" style={{color:"white"}}>
          <h3>Contact Info</h3>
          <ul style={{listStyle:"none",paddingLeft:"0"}}>
            <li className="my-4">
              <p style={{color:"#ced1da"}}>Location: 121, Basement,Jasola, Pocket-1 Zakir Nagar, South Delhi, New Delhi, Delhi, India, 110025</p>
            </li>
            <li className="my-4">
              <p style={{color:"#ced1da"}}>Email: info.hybridxpay@gmail.com</p>
            </li>
            <li className="my-4">
              <p style={{color:"#ced1da"}}>Phone: +91 9668544742</p>
            </li>
          </ul>
          </div>

        </div>
        </div>
    </footer>
    <div className={`${FooterStyle.copyrightArea}`} >
      <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p style={{color:"#ced1da", marginTop:"10px", fontSize:"20px"}}>Copyright 2024 All Rights Reserved by HYBRIDX
                </p>
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
