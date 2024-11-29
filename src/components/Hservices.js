import React from "react";
import HSstyles from "../CSS/Hservices.module.css";
const Hservices = () => {
  return (
    <>
      <div className={HSstyles.back}>
        <div className={`container ${HSstyles.container}`}>
          <div className={`container text-center ${HSstyles['text-center']}`}>
            <span
              style={{
                color: "#2F67F0",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              OUR SERVICES
            </span>
            <h1
              style={{
                maxWidth: "660px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Provide you all kinds of services of information technology
            </h1>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
            <div className="col mb-5">
              <div className={`card ${HSstyles.card}`} >
                <i className={`${HSstyles.circle}`}>
                  <svg
                    class={`${HSstyles.fontawesomesvg}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
                  </svg>
                </i>
                <div className="card-body">
                  <h4 className="card-title">
                    Dependable and Secure Payment Solutions
                  </h4>
                  <p className={`card-text my-3 ${HSstyles.cardText}`}>
                    At HybridxPay, we prioritize the safety and reliability of
                    your financial transactions through our advanced payment
                    services. Employing cutting-edge encryption methods and
                    robust fraud detection systems, we guarantee the
                    confidentiality and protection of your customer data,
                    safeguarding it from any unauthorized access.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card ${HSstyles.card}`}>
              <i className={`${HSstyles.circle}`}>
              <svg class={`${HSstyles.fontawesomesvg}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>
                </i>
                <div className="card-body">
                  <h4 className="card-title">
                    Enhanced Customer Engagement through Advanced Technology
                  </h4>
                  <p className={`card-text my-3 ${HSstyles.cardText}`}>
                    Recognizing the importance of seamless system integration,
                    our payment solutions are customized to effortlessly
                    integrate with various platforms, whether it's an e-commerce
                    site, a mobile application, or a traditional business
                    outlet. Enjoy smooth transitions and straightforward payment
                    procedures without any disruption to your existing workflow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card ${HSstyles.card}`}>
              <i className={`${HSstyles.circle}`}>
              <svg class={`${HSstyles.fontawesomesvg}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
                </i>
                <div className="card-body">
                  <h4 className="card-title">Smooth Integration</h4>
                  <p className={`card-text my-3 ${HSstyles.cardText}`}>
                    Harnessing contemporary technology to enhance customer
                    interactions, our goal is to offer an enriched experience in
                    every transaction. Our innovative approach to payment
                    solutions guarantees a seamless, user-friendly interface for
                    your customers, thereby elevating their overall engagement
                    and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hservices;
