"use client";
import Link from "next/link";
import styles from "../styles/page.module.css";
import { Row, Col } from "react-bootstrap";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RxDoubleArrowDown } from "react-icons/rx";
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
                <h1 className="text-center pt-5 px-2 px-md-0">
                  Helping Generations Age Better
                </h1>
              </div>
            )}
          </TrackVisibility>

          <Row className="p-0 m-0">
            <Col sm={12} md={11} lg={10} className="mx-auto mt-5 p-0">
              <Row>
                <Col md={6} className="">
                  <Link href="#contact">

                  <img
                    src="/assets/the-model.png "
                    alt="model-image"
                    className="rounded-5 "
                    width={550}
                    height={350}
                  />
                  </Link>
                  <div className="text-center text-black mt-4 fs-4 mb-5">
                    <Link href="#contact">THE MODEL</Link>
                  </div>
                </Col>
                <Col md={6}>
                  <Link href="#contact">

                  <img
                    src="/assets/the-pt.png "
                    alt="model-image"
                    className="rounded-5"
                    width={550}
                    height={350}
                  />
                  </Link>
                  <div className="text-center text-black fs-4 mt-4 mb-5">
                    <Link href="#contact">THE PT</Link>
                  </div>
                </Col>
              </Row>
            </Col>

            <Link href="#contact">
              <h2 className="text-center animate__animated animate__slow animate__bounce animate__infinite mt-5">
                <RxDoubleArrowDown />
              </h2>
            </Link>
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
                      <Link href="https://www.linkedin.com/in/dr-muftiah-jokomba-001819a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                        <FaLinkedin />
                      </Link>
                    </Col>

                    <Col>
                      <Link href="https://twitter.com/TheModelPT?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                        <FaXTwitter />
                      </Link>
                    </Col>

                    <Col>
                      <Link href="https://www.instagram.com/themodel_pt">
                        <BsInstagram />
                      </Link>
                    </Col>
                    <Col>
                      <Link href="https://www.facebook.com/profile.php?id=100067550227802&mibextid=LQQJ4d">
                        <BsFacebook />
                      </Link>
                    </Col>
                    <Col>
                      <Link href="https://www.tiktok.com/@themodelpt">
                        <FaTiktok />
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
