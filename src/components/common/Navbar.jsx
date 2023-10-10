import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <section className="grid-container">
      <div className={styles.navbar_container}>
        <nav className="navbar px-md-5">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              <img
                src="/assets/logo-color-icon.png"
                alt="logo"
                width={45}
                height={50}
              />
            </Link>
            <button
              className="navbar-toggler border-0 fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                className={` ${styles.navbar_links} navbar-nav me-auto mb-2 mb-lg-0`}
              >
                <li className="nav-item">
                  <Link className="nav-link mx-4 fs-4 mt-3" href="#contact">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

        </nav>
      </div>
    </section>
  );
};

export default Navbar;
