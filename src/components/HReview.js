import React from "react";
const HReview = () => {
  return (
    <>
    
      <div className="back2" style={{ backgroundColor: "#E8ECF5" }}>
        
        <div className="container" style={{ padding: "3rem 3rem"}}>
        <div
            className={`container text-center pb-3`}
          >
            <span
              style={{
                color: "#2F67F0",
                textAlign: "center",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Our Review
            </span>
            <h1
              style={{
                maxWidth: "660px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              More Than 4500 Happy Customers
              Trust Our Services
            </h1>
          </div>
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">

                <div className="card">
                  <div class="card-body">
                    <p class="card-text">
                      " Our customers really like how simple and smooth it is to
                      do transactions with HybridxPay. It's strong and simple to
                      add to our system, and it has great fraud detection, so we
                      feel secure. We can customize it to fit our needs
                      perfectly. HybridxPay has changed the way we check out,
                      and now it's a crucial part of our business.".
                    </p>
                    <h5 class="card-title" style={{ color: "#2F67F0" }}>
                      Suraj Meheta
                    </h5>
                    <small class="text-body-secondary">Manager</small>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="card">
                  <div class="card-body">
                    <p class="card-text">
                      " We're really happy with HybridxPay. It has made online
                      transactions much simpler, providing a quick, secure, and
                      efficient solution for our customers. The customer support
                      team is always there for us. They're not just the ones
                      handling payments; they're a key partner in our
                      business.".
                    </p>
                    <h5 class="card-title" style={{ color: "#2F67F0" }}>
                      Satish Gupta
                    </h5>
                    <small class="text-body-secondary">General Manager</small>
                  </div>
                </div>
              </div>
                <div class="carousel-item">
                    <div className="card">
                    <div class="card-body">
                        <p class="card-text">
                        " In the fast-paced world of online fashion, a smooth
                        payment process is crucial. Since switching to HybridxPay,
                        our conversion rates have soared. It's reliable, secure,
                        and user-friendly, reducing payment-related inquiries.
                        Highly recommended for any online business."
                        </p>
                        <h5 class="card-title" style={{ color: "#2F67F0" }}>
                        Vishal Rawat
                        </h5>
                        <small class="text-body-secondary">CEO</small>
                    </div>
                    </div>
                </div>
            </div>
            <button 
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
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
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              backgroundColor="black"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HReview;
