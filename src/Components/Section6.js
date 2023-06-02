import React from "react";

export default function Section6() {
  return (
    <>
      <section
        id="section6"
        className="d-flex align-items-center justify-content-evenly py-5 mb-5"
      >
        {/* PARTNER SECTION WRITTEN PART */}
        <div id="section6-div">
        <h1  className="pt-5 pb-3 text-end">
          We Work With The <br></br>Best Partners
        </h1>
        <p className="text-break pb-4 text-end">
          We at Valsco take pride in being an up-and-coming supplier of
          cutting-edge software solutions that transform companies of all sizes.
          Our mission is straightforward: to provide forefront technology to our
          clients for them to improve their operations, increase efficiency, and
          achieve their objectives.
        </p>
        <div className="text-end">
        <button id="btn-read-more" className="border-0 rounded-2 fw-bold">Read More</button>
        </div>
        </div>

        {/* JURIDENT LOGO PART IN PARTNERS SECTION */}
        <div className="border-end border-bottom p-5 border-dark ">
            <img src="./images/jurident.png" className="jurident-img "/>
            <p className="fw-bold text-center">JURIDENT</p>
        </div>
      </section>
    </>
  );
}
