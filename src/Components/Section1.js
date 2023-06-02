import React from "react";

export default function Section1() {
  return (
    <>
      <section
        id="section1"
        className="d-flex flex-column align-items-center p-4"
      >
        <h1 className="m-4 fw-bolder" id="section1-h1">
          Services
        </h1>
        <h2 className="mb-5" id="section1-h2">
          ...Designing While Exploring The World...
        </h2>
        <div className="d-flex flex-wrap align-items-center justify-content-evenly w-100 ">
          <div className="service-div d-flex flex-column align-items-center p-4 border-top border-start border-secondary">
            <img src="./images/service1.png" className="service-img"></img>
            <h3 className="my-2">Spot</h3>
            <p className="text-break text-center">
              Hello this is just a sample description of the above mentioned
              service
            </p>
          </div>
          <div className="service-div d-flex flex-column align-items-center p-4 border border-bottom-0 border-secondary">
            <img src="./images/service2.png" className="service-img"></img>
            <h3 className="my-2">Suggest</h3>
            <p className="text-break text-center">
              Hello this is just a sample description of the above mentioned
              service
            </p>
          </div>
          <div className="service-div d-flex flex-column align-items-center p-4 border-top border-end border-secondary">
            <img src="./images/service3.png" className="service-img"></img>
            <h3 className="my-2">Solve</h3>
            <p className="text-break text-center">
              Hello this is just a sample description of the above mentioned
              service
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
