import React, { useEffect, useRef } from 'react';
import girlph from "../images/girlph.png";
import "../CSS/Hchooseus.css";
const Hchooseus = () => {
   const ImgRef = useRef(null);

   useEffect(() => {
    const currentImgRef = ImgRef.current;
     const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
        else{
          entry.target.classList.remove('visible');
        }
      });
     })

     if(currentImgRef){
      observer.observe(currentImgRef);
     }
   
     return () => {
       if(currentImgRef){
        observer.unobserve(currentImgRef);
       }
     }
   },[])
   

  return (
    <div>
      <div className="container " style={{ marginTop: "6rem" }}>
        <div className="row">
          <div className="col-sm-6 my-4 mb-5 mb-sm-0">
            <h5 style={{ color: "#2F67F0" }}>WHY YOU CHOOSE US</h5>
            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  fontSize: "2.5rem",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                How we deal with the aspect of IT services at a glance
              </h4>
              <p className="card-text my-4" style={{ width: "25vw" }}>
                At HybridxPay, we understand that your success is pivotal, and
                we aspire to be more than just a payment provider—we're your
                dedicated partner in growth. Our commitment lies in providing
                seamless payment solutions that empower your business to
                flourish in today's rapidly evolving digital landscape. Backed
                by a secure platform, tailored support, and an unwavering
                dedication to excellence, you can navigate the complexities of
                payments with confidence. HybridxPay stands by you, supporting
                your journey so you can reach new milestones effortlessly and
                with assurance. Let us serve as the conduit that connects you to
                success
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
                  Customized Solutions: Payment options designed to suit your specific needs.
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
                  Intuitive Interface: User-friendly platform for smooth and seamless payments.

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
                  24/7 Customer Support: Dedicated team available around the clock.
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
                  Swift Payouts: Reliable and prompt access to your funds.

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
                  Transparent Pricing: Competitive and affordable rates.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-body">
              <img ref={ImgRef} src={girlph} class="img-fluid rounded-start animated-girl" alt="LANDING" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hchooseus;
