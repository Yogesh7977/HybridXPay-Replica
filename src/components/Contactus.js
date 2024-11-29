import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactusStyle from "../CSS/Contactus.module.css";
const Contactus = () => {
    const submitForm = (e) =>{
        e.preventDefault();
        alert("Your Form Was Submitted Successfully")
    }

    const onChange = (e) => {
        console.log(e.target.value);
    }

  const arr = [
    {
      icon: faLocationDot,
      title: "Corporate Address:",
      content:
        "121, Basement,Jasola, Pocket-1 Zakir Nagar, South Delhi, New Delhi, Delhi, India, 110025",
    },
    {
      icon: faEnvelope,
      title: "Email Address:",
      content: "info.hybridxpay@gmail.com",
    },
    {
      icon: faPhone,
      title: "Phone Number:",
      content: "+91 9668474742",
    },
  ];
  return (
    <>
      <div className="container my-3 mb-5">
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      </div>
      <div className="container mb-4">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {arr.map((item, index) => (
            <div class="col" key={index}>
              <div class={`card ${ContactusStyle.card}`}>
                <div className={`${ContactusStyle.iconcircle}`}>
                  <FontAwesomeIcon
                    className={`${ContactusStyle.icon}`}
                    icon={item.icon}
                  />
                </div>
                <div class={`card-body ${ContactusStyle["card-body"]}}`}>
                  <h5 class="card-title" style={{ textAlign: "center" }}>
                    {item.title}
                  </h5>
                  <p class="card-text" style={{ textAlign: "center" }}>
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="backcol" style={{ backgroundColor: "#f6f7f9" }}>
        <div className="container pb-5">
          <div
            className={`container text-center`}
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          >
            <span
              style={{
                color: "#2F67F0",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Your Benefits
            </span>
            <h1
              style={{
                maxWidth: "660px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Eliminate the Hassles of Payment
            </h1>
          </div>


          <form onSubmit={submitForm}>
            <div class="mb-3 row ">
              <label
                for="exampleFormControlInput1 "
                class="col-sm-2 col-form-label"
                style={{ fontWeight: "600" }}
              >
                Name
              </label>
              <div className="col-lg-9 col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="mb-3 row ">
              <label
                for="exampleFormControlInput1 "
                class="col-sm-2 col-form-label"
                style={{ fontWeight: "600" }}
              >
                Email
              </label>
              <div className="col-lg-9 col-sm-9">
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label
                for="exampleFormControlInput1 "
                class="col-sm-2 col-form-label"
                style={{ fontWeight: "600" }}
              >
                Mobile
              </label>
              <div className="col-lg-9 col-sm-9">
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={onChange}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label
                for="exampleFormControlInput1 "
                class="col-sm-2 col-form-label"
                style={{ fontWeight: "600" }}
              >
                Subject
              </label>
              <div className="col-lg-9 col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={onChange}
                />
              </div>
            </div>

            <div class="mb-3 row">
              <label
                for="exampleFormControlTextarea1"
                class="col-sm-2 col-form-label"
                style={{ fontWeight: "600" }}
              >
                Message
              </label>
              <div className="col-lg-9 col-sm-9">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
            <div className="container text-center">
              <button
                type="submit"
                class={`btn btn-primary btn-lg pb-3 my-3 ${ContactusStyle.btn1}`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactus;
