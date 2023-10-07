import styles from "./page.module.css";
import { Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <div className={styles.home_banner}>
        <h2 className="text-center  pt-5">
          We make sleek and modern designs for <br /> your business or whatever
          short line <br /> you choose
        </h2>

        <Row>
          <Col md={10} className="mx-auto mt-5">
            <Row>
              <Col md={6}>
                <div>
                  <img
                    src="/assets/model-1.jpg "
                    alt="model-image"
                    className="rounded-4"
                    width={570}
                    height={350}
                  />
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <img
                    src="/assets/model-2.png "
                    alt="model-image"
                    className="rounded-4"
                    width={550}
                    height={350}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className={styles.section_2}>
        <p className="text-center w-50 mx-auto  pt-5 fs-5">
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
        <img src="/assets/gold-line.jpg" alt="gold-line" width={950} height={50} className="pt-5" />

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
