import React from "react";

export default function Navbar() {
  return (
    <>
      <section id="section-nav">

        {/* NAVIGATION BAR ON LANDING SCREEN */}
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./images/logo.png" id="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-light px-3"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item " href="#">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item " href="#">
                        Partners
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* LANDING SCREEN */}
        <div className="m-5">
          <h1 className="mt-5 mx-5 text-bold" id="nav-h1">
            GET EVERY SINGLE SOLUTION{" "}
          </h1>
          <p className="text-light w-50 m-5" id="navbar-p">
            We at Valsco take pride in being an up-and-coming supplier of
            cutting-edge software solutions that transform companies of all
            sizes. Our mission is straightforward: to provide forefront
            technology to our clients for them to improve their operations,
            increase efficiency, and achieve their objectives.
          </p>
          <div>
            <a href="#section1"><button className="btn-carousel ms-5 my-2 rounded-3 border-0 fw-bold">
              Services
            </button></a>
            <a href="#section3"><button className="btn-carousel ms-3 my-2 rounded-3 border-0 fw-bold">
              Learn More &#x203A;
            </button></a>
          </div>
        </div>
      </section>
    </>
  );
}
