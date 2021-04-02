import React, { Component } from 'react'
import Link from 'next/link'
import styles from '../components/templates/AuditPageTemplate/audit.module.scss'
import Button from 'react-bootstrap/Button'

class AuditSubmitted extends Component {
  render() {
    return (
      <div>
        <div className={styles.contentWrap}>
          <div className={styles.auditContainer}>
            <br />
            <h5>Help Improve Google's Computer Vision for Minorities</h5>
            <br />
            <p className={styles.projectDesc}>
              Google Computer Vision is extensively used around the globe to understand images. Crowd Auditing could
              help uncover hidden misclassifications that impact underrepresented communities.
            </p>
            <div className="card">
              <div className={styles.landingContainer1}>
                <div className={styles.auditBarLeft}>
                  <p className={styles.auditBarText}>
                    <b>Auditing Image 243</b> / 5043
                  </p>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-auto">
                  <img src="/gluegun.png" alt="img" />
                </div>
                <div className="col-sm-7 px-5">
                  <br />
                  <h5 className={styles.question}>Your audit has been submitted.</h5>
                  <p className="card-title">Thank you. Your audits are helping Google's system be more inclusive!</p>
                  <div className={styles.internalContainer}>
                    <div className={styles.labelsCol1}>
                      <p>Your Reported Labels</p>
                      <Button className={styles.labelButton} disabled>
                        GUN
                      </Button>{' '}
                      <br />
                      <Button className={styles.labelButton} disabled>
                        CRIME
                      </Button>{' '}
                    </div>
                    <div className={styles.labelsCol2}>
                      <p>Top Reported Labels</p>
                      <Button className={styles.labelButton} disabled>
                        GUN
                      </Button>{' '}
                      <br />
                      <Button className={styles.labelButton} disabled>
                        CRIME
                      </Button>{' '}
                      <br />
                      <Button className={styles.labelButton} disabled>
                        DANGER
                      </Button>{' '}
                      <br />
                      <Button className={styles.labelButton} disabled>
                        BLACK
                      </Button>{' '}
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <div className={styles.auditRecords}>
                      <p>Learn more about what others say about this </p>
                      <div className={styles.buttonContainer}>
                        <Link href="/records">
                          <div className={`btn ${styles.cardButton}`}>Audit Records</div>
                        </Link>
                      </div>
                    </div>
                    <div></div>
                    <div className={styles.nextImage}>
                      <img src="/nextImage.png" alt="img" />
                      <div className={styles.buttonContainer}>
                        <Link href="/records">
                          <div className={`btn ${styles.cardButton}`}>Audit Records</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuditSubmitted
