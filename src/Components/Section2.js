import React from "react";

export default function Section2() {
  return (
    <>
      <section className="d-flex align-items-center justify-content-evenly py-5 my-5">
        <div className="p-4 border-top border-start border-dark" id="service4_div">
        <img src="./images/service4.png" id="service4-img" className=""/>
        </div>
        <div className="d-flex flex-column" id="section2-maindiv">
          <h1 className="fw-bolder">Our Services</h1>
          <p className="text-break my-2">
            We strive to excel in developing custom software solutions that are
            tailored to our clients' specific needs. Investing in software
            solutions is a significant decision for any business. Hence, Valsco
            provides a wide range of services in addition to software
            development
          </p>
          <div className="d-flex align-items-center my-2">
            <img src="./images/bullet-points.png" className="bullet-points" />
            <h3>Consulting</h3>
          </div>
          <div className="d-flex align-items-center my-2">
            <img src="./images/bullet-points.png" className="bullet-points" />
            <h3>Training</h3>
          </div>
          <div className="d-flex align-items-center my-2">
            <img src="./images/bullet-points.png" className="bullet-points" />
            <h3>Support Services</h3>
          </div>
        </div>
      </section>
    </>
  );
}
