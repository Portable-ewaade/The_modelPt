"use client";
import Link from "next/link";
import styles from "../styles/page.module.css";
import { Row, Col } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import TrackVisibility from "react-on-screen";
import "animate.css";
// import { ContactForm } from '../components/contact/ContactForm'

export default function Home() {
  return (
    <main id="home">
      <section className="grid-container">
        <div className={styles.home_banner}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? " animate__animated animate__pulse " : ""
                }
              >
                <h2 className="text-center pt-5 px-2 px-md-0">
                  We make sleek and modern designs for{" "}
                  <br className="d-none d-md-block" /> your business or whatever
                  short line <br className="d-none d-md-block" /> you choose
                </h2>
              </div>
            )}
          </TrackVisibility>

          <Row className="p-0 m-0">
            <Col sm={12} md={11} lg={10} className="mx-auto mt-5 p-0">
              <Row>
                <Col md={6} className="">
                  <img
                    src="/assets/the-model.png "
                    alt="model-image"
                    className="rounded-5 "
                    width={550}
                    height={350}
                  />
                  <div className="text-center text-black mt-4 fs-4 mb-5">
                    <Link href="#contact">THE MODEL</Link>
                  </div>
                </Col>
                <Col md={6}>
                  <img
                    src="/assets/the-pt.png "
                    alt="model-image"
                    className="rounded-5"
                    width={550}
                    height={350}
                  />
                  <div className="text-center text-black fs-4 mt-4 mb-5">
                    <Link href="#contact">THE PT</Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section className="grid-container">
        <div className={styles.section_2}>

          <ContactForm title="Send Us A Message " />

          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? " animate__animated animate__swing " : ""
                }
              >
                <div className={styles.icons}>
                  <Row>
                    <Col>
                      <Link href="/">
                        <FaLinkedin />
                      </Link>
                    </Col>

                    <Col>
                      <Link href="/">
                        <FaXTwitter />
                      </Link>
                    </Col>

                    <Col>
                      <Link href="/">
                        <BsInstagram />
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </section>

      {/* <section className="grid-container">
        <div className={styles.section_3}>
          <img
            src="/assets/gold-line.jpg"
            alt="gold-line"
            width={950}
            height={50}
            className="pt-5"
          />

          <ul className={styles.section_3_list}>
            <h4>Past Clients & Collaborations</h4>
            <p>Brand Identity Design</p>
            <p>Photo Manipulation</p>
            <p>Illustration</p>
            <p>Brand Identity Design</p>
            <p>Photo Manipulation</p>
            <p>Illustration</p>
          </ul>
        </div>
      </section> */}
    </main>
  );
}
