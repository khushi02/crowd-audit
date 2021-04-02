import React, { Component } from 'react'
import Link from 'next/link'
import { Badge, Modal } from 'react-bootstrap'

import ProjectHeader from '../components/organisms/ProjectHeader'
import styles from '../components/templates/AuditPageTemplate/audit.module.scss'

const yourLabels = ['GUN', 'CRIME']
const reportedLabels = ['GUN', 'CRIME', 'DANGER', 'BLACK']

class AuditSubmitted extends Component {
  renderYourLabels() {
    return yourLabels.map((label) => (
      <div>
        <Badge pill nav-stacked className={styles.reportedLabel}>
          {label}
        </Badge>
      </div>
    ))
  }

  renderReportedLabels() {
    return reportedLabels.map((label) => (
      <div>
        <Badge pill nav-stacked className={styles.reportedLabel}>
          {label}
        </Badge>
      </div>
    ))
  }

  state = {
    isOpen: false
  }

  openModal = () => this.setState({ isOpen: true })
  closeModal = () => this.setState({ isOpen: false })

  render() {
    return (
      <>
        <ProjectHeader />
        <div className={styles.contentWrap}>
          <div className={styles.auditContainer}>
            <br />
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
                      <div>{this.renderYourLabels()}</div>
                    </div>
                    <div className={styles.labelsCol2}>
                      <p>Top Reported Labels</p>
                      <div>{this.renderReportedLabels()}</div>
                    </div>
                  </div>
                  <div className={styles.buttonsContainer}>
                    <div className={styles.auditRecords}>
                      <p>Learn more about what others say about this </p>
                      <div className={styles.buttonContainer}>
                        <div className={`btn ${styles.cardButton}`} onClick={this.openModal}>
                          See Audit Records
                        </div>
                      </div>
                      <Modal show={this.state.isOpen} onHide={this.closeModal} size="xl" className={styles.modal}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                          <img src="/auditrecords.png" alt="img" />
                        </Modal.Body>
                      </Modal>
                    </div>
                    <div className={styles.nextImage}>
                      <img src="/nextImage.png" alt="img" />
                      <div className={styles.buttonContainer}>
                        <Link href="/records">
                          <div className={`btn ${styles.cardButton}`}>Audit Next Image</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AuditSubmitted
