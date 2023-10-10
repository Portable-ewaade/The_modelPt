"use client";
import Link from "next/link";
import styles from "../styles/page.module.css"
import { Row, Col } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import React from "react";
import ContactForm from '@/components/contact/ContactForm'
// import { ContactForm } from '../components/contact/ContactForm'

export default function Home() {
  return (
    <main id="home">
      <section className="grid-container">
        <div className={styles.home_banner}>
          <h2 className="text-center pt-5 px-2 px-md-0">
            We make sleek and modern designs for{" "}
            <br className="d-none d-md-block" /> your business or whatever short
            line <br className="d-none d-md-block" /> you choose
          </h2>
          <Row>
            <Col sm={12} md={11} lg={8} className="mx-auto mt-5">
              <Row>
                <Col md={6} className="container-fluid">
                  <img
                    src="/assets/model-1.jpg "
                    alt="model-image"
                    className="rounded-5 "
                    width={450}
                    height={350}
                  />
                  <div className="text-center text-black mt-1">
                    <Link href="/">The Model</Link>
                  </div>
                </Col>
                <Col md={6}>
                  <img
                    src="/assets/model-2.png "
                    alt="model-image"
                    className="rounded-5"
                    width={450}
                    height={350}
                  />
                  <div className="text-center text-black">
                    <Link href="/" className="text-center mt-1">
                      The PT
                    </Link>
                  </div>
                </Col>

                <div className={styles.icons}>
                  <Row>
                    <Col>
                      <BsFacebook />
                    </Col>
                    <Col>
                      <FaXTwitter />
                    </Col>
                    <Col>
                      <BsInstagram />
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section className="grid-container">
        <div className={styles.section_2} >
          <p className=" mx-auto pt-5 fs-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            nesciunt saepe placeat! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati aut, inventore nobis perspiciatis minus
            reprehenderit voluptatem itaque suscipit impedit a eaque voluptas
            adipisci facere molestias at, sit aliquam dolores non Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Unde soluta dolor
            eriam ab dicta at
          </p>

        <ContactForm title="Send Us A Message " />
        </div>
        
      </section>
      <section className="grid-container">
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
      </section>
    </main>
  );
}
