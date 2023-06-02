import React from "react";

export default function Section5() {
  return (
    <>
    {/* FOOTER SECTION */}
      <section
        id="section5"
        className="d-flex flex-column text-light align-items-center"
      >
        <a href="#section-nav" className="w-100"><button className="text-center btn w-100 text-light p-2" id="btn-back-to-top">Back to Top</button></a>
        <h3 className="pt-5">If Not Now, When?</h3>
        <h3>Let's Work Together!</h3>
        <section className="d-flex justify-content-evenly p-5 w-100" >

            {/* FOOTER COLUMN 1 */}
            <div className="d-flex flex-column">
                <p className="fw-bolder pb-2">Get to know us</p>
                <a href="/" className="footer-a text-light py-1">Blog</a>footer-a
                <a href="/" className="footer-a text-light py-1">About Valsco</a>
                <a href="/" className="footer-a text-light py-1">Client Relations</a>
                <a href="/" className="footer-a text-light py-1">Valsco Services</a>
                <a href="/" className="footer-a text-light py-1">Client Feedbacks</a>
            </div>
            {/* FOOTER COLUMN 2 */}
            <div className="d-flex flex-column">
                <p className="fw-bolder pb-2">Our Services</p>
                <a href="/" className="footer-a text-light py-1">Consulting</a>
                <a href="/" className="footer-a text-light py-1">Training</a>
                <a href="/" className="footer-a text-light py-1">Support Services</a>
            </div>
            {/* FOOTER COLUMN 3 */}
            <div className="d-flex flex-column">
                <p className="fw-bolder pb-2">Our Domains</p>
                <a href="/" className="footer-a text-light py-1">Software Devlopment</a>
                <a href="/" className="footer-a text-light py-1">Testing</a>
                <a href="/" className="footer-a text-light py-1">Designing</a>
                <a href="/" className="footer-a text-light py-1">Marketing</a>
            </div>
        </section>
      </section>
    </>
  );
}
