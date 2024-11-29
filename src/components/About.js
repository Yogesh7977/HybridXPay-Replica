import React from "react";
import Habout from "./Habout";
import excellence from "../images/excellence.png";
import innovation from "../images/innovation2.png";
import approach from "../images/approach2.png";
import collab from "../images/collabration2.png";
import integrity from "../images/interity2.png";
import learning from "../images/learning2.png";
import AboutStyle from "../CSS/About.module.css";
import vision from "../images/vision.png";
import mission from "../images/mission.png";
const About = () => {
  const arr = [
    {
      imgUrl: excellence,
      title: "Excellence",
      descriptionText:
        "We are committed to delivering excellence in everything we do. We strive for the highest standards of quality, reliability, and professionalism in our technology services and payment solutions. Our dedication to excellence ensures that our clients receive exceptional products and services that exceed their expectations..",
    },
    {
      imgUrl: innovation,
      title: "Innovation",
      descriptionText:
        "We foster a culture of continuous innovation, embracing new technologies and ideas to provide our clients with the most advanced and effective solutions in the industry. We encourage creativity and out-of-the-box thinking to drive meaningful change.",
    },
    {
      imgUrl: approach,
      title: "Customer-Centric Approach",
      descriptionText:
        "Our clients are at the heart of everything we do. We listen to their needs, understand their goals, and tailor our solutions to meet their specific requirements. We prioritize building long-lasting relationships, providing personalized support, and delivering exceptional customer experiences.",
    },
    {
      imgUrl: collab,
      title: "Collaboration",
      descriptionText:
        "We believe in the power of collaboration. We work closely with our clients, partners, and industry experts to leverage collective knowledge and expertise. By fostering collaboration, we can develop comprehensive and customized solutions that drive mutual success.",
    },
    {
      imgUrl: integrity,
      title: "Integrity",
      descriptionText:
        "We operate with the utmost integrity, maintaining transparency, honesty, and ethical conduct in all aspects of our business. We value trust and reliability, ensuring that our clients can depend on us for secure and reliable technology services and payment solutions.",
    },
    {
      imgUrl: learning,
      title: "Continuous Learning",
      descriptionText:
        "Technology is ever-evolving, and we are committed to staying ahead of the curve. We embrace a culture of continuous learning, investing in the professional development of our team members and staying informed about the latest advancements and trends in technology and payments.                   ",
    },
  ];

  return (
    <>
      <div className="container my-3 mb-5">
        <h2 style={{ textAlign: "center" }}>About Us</h2>
      </div>
      <Habout />

      <div className="background2 " style={{ backgroundColor: "#fafafb" }}>
        <div className="container">
          <h4 style={{ textAlign: "center" }}>Our value</h4>
          <div class="row row-cols-1 row-cols-md-3 g-4 my-4 mb-5 pb-5">
            {arr.map((item, index) => (
              <div class="col" key={index}>
                <div class={`card ${AboutStyle.card}`}>
                  <img
                    src={item.imgUrl}
                    class={`card-img-top ${AboutStyle["card-img-top"]}`}
                    alt={item.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.descriptionText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "6rem" }}>
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card-body" style={{ paddingTop: "150px" }}>
              <h1 className="card-title">Our Vision</h1>
              <p className="card-text my-4" style={{ width: "25vw" }}>
                Our vision guides us towards creating a world where the process
                of transferring money is no longer a barrier but a gateway to
                opportunities. We aim to lead the digital payment industry
                through constant innovation, providing user-friendly and secure
                solutions that cater to diverse needs. We strive to democratize
                financial services, ensuring they are available to all,
                regardless of their location or background. By making
                transactions seamless and secure, we aim to empower individuals,
                businesses, and communities to connect and thrive in the global
                economy.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <img src={vision} class="img-fluid rounded-start" alt="vision" />
            </div>
          </div>
        </div>
      </div>

      <div className="back3" style={{ backgroundColor: "#fafafb" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <img src={mission} class="img-fluid rounded-start" alt="mission" />
            </div>
            <div className="col-sm-6">
              <div className="card-body">
                <div className="card-body" style={{ paddingTop: "150px" }}>
                  <h1 className="card-title">Our Mission</h1>
                  <p className="card-text my-4" style={{ width: "25vw" }}>
                    Our mission at HybridxPay is to deliver innovative, secure,
                    and user-friendly digital payment solutions to businesses
                    and individuals. We aim to simplify financial transactions,
                    ensuring efficiency and reliability at all times. Our
                    dedication to customer service, advanced technology, and the
                    highest security standards are the guiding principles of our
                    work. We are committed to fostering the growth of our
                    customers in an increasingly digital world, empowering them
                    to focus on what truly matters – serving their own clients
                    excellently.
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

export default About;
