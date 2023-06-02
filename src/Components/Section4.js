import React from "react";

export default function Section4() {
  return (
    <>
      <section className="d-flex justify-content-evenly p-5 flex-wrap text-light" id="section4">

        {/* CONTACT SECTION */}
        <div className="d-flex flex-column" id="section4-div1">
          <h3 className="fw-bolder" id="section4-heading1">Valsco Solutions</h3>
          <h3 className="pt-5 pb-3">Contact Us</h3>
          <a href="/" className="text-decoration-none text-white">Instagram</a>
          <a href="/" className="text-decoration-none text-white">Facebook</a>
          <a href="/" className="text-decoration-none text-white">Linkedin</a>
          <h3 className="pt-5 pb-3">Our Locations</h3>
          <div className="d-flex">
            <div>
              <p>Vellore Institute of Technology,</p>
              <p>Vellore-632014</p>
            </div>
          </div>
        </div>
        <div className="" id="section4-div2">
          <h3 className="fw-bolder" id="section4-heading2">Building the Businesses of Tomorrow</h3>
        
          {/* FORM SECTION */}
          <form className="needs-validation was-validated text-dark">
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Name"
              name="Name"
              required
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="E-mail Id"
              name="Email-ID"
              required
            />
            <label htmlFor="floatingEmail">Email-Id</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="number"
              className="form-control"
              id="floatingNumber"
              placeholder="Phone Number"
              name="Phone Number"
              required
            />
            <label htmlFor="floatingNumber">Phone Number</label>
          </div>
          <div className="form-floating my-3">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="floatingTextarea"
              row="100"
              cols="50"
              name="Message"
              required
            ></textarea>
            <label htmlFor="floatingTextarea">Message</label>
          </div>

          <button className="btn-form text-center w-100 fw-bold rounded-3" type="submit">
            Submit
          </button>
        </form>
        </div>

      </section>
    </>
  );
}
