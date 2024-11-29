import React, { useEffect } from "react";
import HYBStyle from "../CSS/HYbenefits.module.css";
import aos from "aos";
import "aos/dist/aos.css";
import customisedSolution from "../images/customisedSolution.png";
const HYbenefits = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <div className={`${HYBStyle.back} pb-5`}>
        <div className="container my-4">
          <div
            className={`container text-center ${HYBStyle["text-center"]}`}
            data-aos="fade-up"
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
          <div
            className={`row row-cols-1 row-cols-md-2 g-4 my-3 mb-1 ${HYBStyle.row}`}
            style={{ marginLeft: "-50px", marginRight: "-50px" }}
            data-aos="fade-up"
          >
            <div className="col" data-aos="fade-up">
              <div className={`card ${HYBStyle.card}`} data-aos="fade-up">
                <div className="card-body" data-aos="fade-up">
                  <h3 className="card-title">
                    Secure and Reliable Payment Processing
                  </h3>
                  <p className={`card-text my-3 ${HYBStyle.cardText1}`}>
                    We prioritize the security and reliability of your payment
                    transactions. With the constantly evolving landscape of
                    payment fraud and data breaches, we implement the latest
                    security measures to protect your business and your
                    customers' sensitive information. Our robust payment
                    infrastructure ensures that every transaction is encrypted,
                    safeguarding against unauthorized access and ensuring peace
                    of mind for both you and your customers..
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card ${HYBStyle.card}`} data-aos="fade-up">
                <div className="card-body">
                  <h3 className="card-title">
                    Innovative Technologies for Seamless Payments
                  </h3>
                  <p className={`card-text my-3 ${HYBStyle.cardText1}`}>
                    We stay at the forefront of technological advancements to
                    bring you the most innovative payment solutions available.
                    From mobile payment solutions to contactless payments, we
                    leverage emerging technologies to offer convenient and
                    frictionless payment experiences. We also provide
                    integrations with popular e-commerce platforms and Point of
                    Sale (POS) systems, allowing you to seamlessly accept
                    payments across multiple channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card ${HYBStyle.card}`} data-aos="fade-up">
                <div className="card-body">
                  <h3 className="card-title">Exceptional Customer Support</h3>
                  <p className={`card-text my-3 ${HYBStyle.cardText1}`}>
                    We pride ourselves on delivering exceptional customer
                    support. Our team of knowledgeable and dedicated
                    professionals is always ready to assist you, whether you
                    have questions about our services, need technical
                    assistance, or require guidance on selecting the right
                    payment solutions for your business. We are committed to
                    being a reliable partner you can rely on for prompt and
                    effective support.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card ${HYBStyle.card}`} data-aos="fade-up">
                <div className="card-body">
                  <h3 className="card-title">Partners in Your Success</h3>
                  <p className={`card-text my-3 ${HYBStyle.cardText1}`}>
                    At HybridxPay, we are more than just a payment solutions
                    provider. We see ourselves as partners in your success. We
                    work closely with you to understand your business goals,
                    challenges, and aspirations. By aligning our solutions with
                    your specific objectives, we help you drive revenue,
                    increase customer satisfaction, and optimize operational
                    efficiency. Your success is our priority
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card ${HYBStyle.card}`} data-aos="fade-up">
                <div className="card-body">
                  <h3 className="card-title">
                    Payment Solutions Tailored to Your Needs
                  </h3>
                  <p className={`card-text my-3 ${HYBStyle.cardText1}`}>
                    At HybridxPay we understand that every business has unique
                    requirements when it comes to payment processing. That's why
                    we offer a wide range of customizable payment solutions
                    designed to meet your specific needs. Whether you operate an
                    e-commerce store, a brick-and-mortar retail business, or a
                    service-based organization, we have the right payment
                    solutions to streamline your operations and provide a
                    seamless payment experience for your customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`card ${HYBStyle.card}`} data-aos="fade-up">
                <div className="card-body">
                  <h3 className="card-title">Experience the Differences</h3>
                  <p className={`card-text my-3 ${HYBStyle.cardText1}`}>
                    Discover the difference that our payment solutions can make
                    for your business. Whether you're a small business looking
                    to expand your payment capabilities or a large enterprise in
                    need of advanced payment processing, we have the expertise
                    and resources to meet your requirements. Trust HybridxPay to
                    provide you with secure, reliable, and innovative payment
                    solutions tailored to your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{paddingTop:"5rem", }}>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div
              className="card-body"
              style={{ position: "relative", bottom: "11%" }}
              data-aos="fade-up"
            >
              <img
                src={customisedSolution}
                class="img-fluid rounded-start"
                alt="LANDING"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <h1
                className="card-title"
                style={{
                  fontSize: "2.5rem",
                  color: "#1f326a",
                  fontWeight: "500",
                }}
              >
                Creating Customized Solutions to Suit Your Business Demands
              </h1>
              <p className={`card-text my-4 ${HYBStyle.cardText1}`}style={{ width: "31vw" }}>
                We strongly believe in providing solutions that match your
                specific business needs. Our experienced team works closely with
                you to understand your unique requirements and creates
                customized payment plans. Whether your business needs regular
                invoicing, subscription management, or support for different
                currencies, we can tailor our services to fit seamlessly into
                your business setup.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HYbenefits;
