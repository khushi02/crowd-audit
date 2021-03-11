import React, { Component } from "react";
import styles from "./audit.module.scss";
import LabelList from "../components/LabelList";

class Index extends Component {
  render() {
    return (
      <div>
        <div className={styles.contentWrap}>
          <div className={styles.auditContainer}>
            <br />
            <h5>Help Improve Google's Computer Vision for Minorities</h5>
            <br />
            <p className={styles.projectDesc}>
              Google Computer Vision is extensively used around the globe to
              understand images. Crowd Auditing could help uncover hidden
              misclassifications that impact underrepresented communities.
            </p>
            <div class="card">
              <div className={styles.landingContainer1}>
                <div className={styles.auditBarLeft}>
                  <p className={styles.auditBarText}>
                    <b>Auditing Image 243</b> / 5043
                  </p>
                </div>
              </div>
              <div class="row no-gutters">
                <div class="col-auto">
                  <img src="/gluegun.png" alt="img" />
                </div>
                <div class="col bg-light px-4">
                  <br />
                  <h5>Labels</h5>
                  <br />
                  <LabelList />
                </div>
                <div class="col-sm-6 px-5">
                  <br />
                  <p class="card-title">
                    Google's algorithm scans the images to generate labels that
                    describe the whole image.
                  </p>
                  <br />
                  <br />
                  <h5 className={styles.question}>
                    Do any labels for this image seem biased or discriminatory
                    in a way that negatively impacts any group of people?
                  </h5>
                  <p className={styles.arrow}>&lt;-- Select labels to report</p>
                  <div className={`col-md-2 ${styles.buttonContainer}`}>
                    <a href="#" className={`btn ${styles.cardButton}`}>
                      Skip to Next Image
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
