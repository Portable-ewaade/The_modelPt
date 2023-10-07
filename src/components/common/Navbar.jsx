import React from "react";
import Link from "next/link";
import styles from './navbar.module.css'
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>

      <nav
        className='navbar navbar-expand-lg px-5'
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src="/assets/logo-color-icon.png" alt="logo" width={45} height={50}/>
          </Link>
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
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={` ${styles.navbar_links} navbar-nav me-auto mb-2 mb-lg-0`}>
            <li className='nav-item'>
              <Link className="nav-link mx-4 active" aria-current="page" href="#">
                THE MODEL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-3" href="#">
                THE PHYSICAL THERAPIST
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-4" href="#">
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-4" href="#">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-4" href="#">
                PROGRESS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-4" href="#">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-4" href="#">
                HELP
              </Link>
            </li>
            
            <div >
              <button type="button" className={` ${styles.btnn}  mx-4`} href="#">
                LOGIN
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
