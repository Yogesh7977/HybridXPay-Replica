import React from 'react'

import aboutImage from "../images/aboutImage.png";
const Habout = () => {
  return (
    <>
    <div className="container">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div
              className="card-body"
              style={{ position: "relative", bottom: "11%" }}
            >
              <img
                src={aboutImage}
                class="img-fluid rounded-start"
                alt="LANDING"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h5 style={{color:"#2F67F0"}}>About</h5>
              <h1
                className="card-title"
                style={{
                  fontSize: "2.5rem",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                Leading Technological Innovations for Ensuring Secure Payments
                Nationwide in India
              </h1>
              <p className="card-text my-4" style={{ width: "31vw" }}>
                HybridxPay: Your Reliable Ally for Comprehensive Payment
                Solutions. Delivering state-of-the-art payment technologies and
                services tailored for businesses across various sizes and
                industries. Leveraging our expertise, we streamline payment
                processes, fortify security, and foster growth.
              </p>
              <ul style={{listStyle:"none", paddingLeft:"0rem"}}>
                <li style={{listStyle:"none"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    ::before
                  </svg>
                  Customized Payment Solutions to Suit Your Requirements
                </li>
                <li style={{listStyle:"none"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    ::before
                  </svg>
                   Secure and Dependable Payment Processing

                </li>
                <li style={{listStyle:"none"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    ::before
                  </svg>
                  Cutting-edge Technologies for Effortless Payments
                </li>
                <li style={{listStyle:"none"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    ::before
                  </svg>
                   Outstanding Customer Support

                </li>
                <li style={{listStyle:"none"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    ::before
                  </svg>
                   Your Allies in Achieving Success

                </li>
                <li style={{listStyle:"none"}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    ::before
                  </svg>
                   Feel the Distinctive Advantage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Habout
