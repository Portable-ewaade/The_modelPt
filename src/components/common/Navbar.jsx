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

            <div className="dropdown">
              <button
                className="btn "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <ul
                className={` ${styles.navbar_links} dropdown-menu`}
                aria-labelledby="dropdownMenuButton1"
              >
                <li className="dropdown-item">
                  <Link className="nav-link fs-5" href="#contact">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
