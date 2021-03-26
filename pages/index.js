import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./index.module.scss";

class Index extends Component {
  render() {
    return (
      <div>
        <div className={styles.contentWrap}>
          <div className={styles.coloredBackground}>
            <Carousel>
              <Carousel.Item>
                <div className={styles.landingContainer1}>
                  <div className={styles.textCont}>
                    <br />
                    <br />
                    <br />
                    <h1 className={styles.heading}>Welcome to Crowd Audit!</h1>
                    <br />
                    <h2 className={styles.desc}>
                      A crowd-powered platform to tackle bias in machine
                      learning projects
                    </h2>
                  </div>
                  <div className={styles.imgCont}>
                    <img
                      className="d-block w-100"
                      src="/carousel_img.png"
                      alt="First slide"
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.landingContainer1}>
                  <div className={styles.textCont}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className={styles.desc}>
                      Drive impact on machine learning by generating hypotheses
                    </h2>
                  </div>
                  <div className={styles.imgCont}>
                    <img
                      className="d-block w-100"
                      src="/carousel_img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.landingContainer1}>
                  <div className={styles.textCont}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className={styles.desc}>
                      Help organize data using descriptors
                    </h2>
                  </div>
                  <div className={styles.imgCont}>
                    <img
                      className="d-block w-100"
                      src="/carousel_img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.landingContainer1}>
                  <div className={styles.textCont}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className={styles.desc}>Participate in discussions</h2>
                  </div>
                  <div className={styles.imgCont}>
                    <img
                      className="d-block w-100"
                      src="/carousel_img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className={styles.nonColoredBackground}>
            <div className={styles.landingContainer2}>
              <div className={styles.twoThirds}>
                <img
                  className="d-block w-100"
                  src="/loggedin-vs-nonloggedin.png"
                  alt="img"
                />
              </div>
              <div className={styles.oneThird}>
                <h1 className={styles.heading}>Help Us Improve Algorithms</h1>
                <br />
                <h2 className={styles.desc}>
                  We want to harness the power of the crowds, your power, to
                  help improve algorithmic systems by detecting bias.
                </h2>
                <br />
                <br />
                <h2 className={styles.desc}>
                  Join our community by creating an account today.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;

