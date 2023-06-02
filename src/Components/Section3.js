import React from "react";

export default function Section3() {
  return (
    <>
      {/* CARAOUSEL FOR FEEDBACK */}
      <section className="py-5 text-light" id="section3">
        <h1 className="fw-bolder text-center mb-5">
          Feedback From Our Clients
        </h1>

        {/* FEEDBACK CAROUSEL FOR LARGE SCREENS */}
        <div
          id="carouselExample"
          className="carousel carousel-light slide  d-sm-none d-md-block d-none d-sm-block"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* FEEDBACK CAROUSEL FOR SMALL SCREENS */}
        <div
          id="carouselExampleSmallScreen"
          className="carousel carousel-light slide  d-none d-sm-block d-md-none"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleSmallScreen"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleSmallScreen"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* FEEDBACK CAROUSEL FOR EXTRA SMALL SCREENS */}
        <div
          id="carouselExampleXSmallScreen"
          className="carousel carousel-light slide d-block d-sm-none"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img src="./images/jurident-logo.png" className="jurident-logo rounded-circle"/>
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleXSmallScreen"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleXSmallScreen"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
