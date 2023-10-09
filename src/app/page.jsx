import styles from "./page.module.css";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <div className={styles.home_banner}>
        <h2 className="text-center pt-5 px-2 px-md-0">
          We make sleek and modern designs for{" "}
          <br className="d-none d-md-block" /> your business or whatever short
          line <br className="d-none d-md-block" /> you choose
        </h2>
        <Row>
          <Col sm={12} md={11} lg={10} className="mx-auto mt-5">
            <Row>
              <Col md={6} className="container-fluid">
                <img
                  src="/assets/model-1.jpg "
                  alt="model-image"
                  className="rounded-5 "
                  width={550}
                  height={450}
                />
              </Col>
              <Col md={6}>
                <img
                  src="/assets/model-2.png "
                  alt="model-image"
                  className="rounded-5"
                  width={550}
                  height={450}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className={styles.section_2}>
        <p className=" mx-auto pt-5 fs-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nesciunt saepe placeat! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Obcaecati aut, inventore nobis perspiciatis minus
          reprehenderit voluptatem itaque suscipit impedit a eaque voluptas
          adipisci facere molestias at, sit aliquam dolores non Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Unde soluta dolor eriam
          ab dicta at
        </p>

        <button className={styles.btnn}>CONTACT ME</button>
      </div>

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
    </main>
  );
}
