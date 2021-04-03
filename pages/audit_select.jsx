import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Grid } from '@material-ui/core'
import FormControl from 'react-bootstrap/FormControl'

import styles from '../components/templates/AuditPageTemplate/audit.module.scss'
import LabelList from '../components/organisms/LabelList'
import ProjectHeader from '../components/organisms/ProjectHeader'

class AuditSelect extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React'
    }
    this.onChangeValue = this.onChangeValue.bind(this)
    this.textInput1 = React.createRef()
    this.textInput2 = React.createRef()
  }

  onChangeValue(event) {
    console.log(event.target.value)
  }

  handleChange1() {
    const value = this.textInput1.current.value
  }
  handleChange2() {
    const value = this.textInput2.current.value
  }

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
                <div className="col bg-light px-4">
                  <br />
                  <h5>Labels</h5>
                  <br />
                  <LabelList selectedLabel={this.props.router.query.label} />
                </div>
                <div className="col-sm-6 px-5">
                  <br />
                  <p className="card-title">
                    Google's algorithm scans the images to generate labels that describe the whole image.
                  </p>
                  <br />
                  <br />
                  <h5 className={styles.question}>How harmful do you think the selected classification(s) are?</h5>
                  <div onChange={this.onChangeValue}>
                    <input type="radio" value="Low" name="gender" /> Low &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="Moderate" name="gender" /> Moderate &nbsp;&nbsp;&nbsp;
                    <input type="radio" value="Extreme" name="gender" /> Extreme
                  </div>
                  <br />
                  <div>
                    <FormControl
                      ref={this.textInput1}
                      type="text"
                      placeholder="Describe your rating"
                      onChange={() => this.handleChange1()}
                    />
                  </div>
                  <br />
                  <div>
                    <FormControl
                      ref={this.textInput2}
                      type="text"
                      placeholder="Which group of people does it negatively impact?"
                      onChange={() => this.handleChange2()}
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className={`col-md-2 ${styles.buttonContainer}`}>
                    <Link href="/audit_submitted">
                      <div className={`btn ${styles.cardButton}`}>Submit Audit</div>
                    </Link>
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

export default withRouter(AuditSelect)
