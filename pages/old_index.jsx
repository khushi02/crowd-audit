import React, { Component } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'

class Index extends Component {
  render() {
    return (
      <div className={styles.contentWrap}>
        <div className={styles.coloredBackground}>
          <div className={styles.landingContainer1}>
            <div className={styles.textCont}>
              <h1 className={styles.heading}>Welcome to Crowd Audit!</h1>
              <h2 className={styles.headingDesc}>Make technology fair for everyone!</h2>
              <Link href={`/projects`}>
                <a className={`btn ${styles.headerCardButton}`}>See All Projects</a>
              </Link>
            </div>
            <div className={styles.imgCont}>
              <img className="d-block w-100" src="/section1_1.png" alt="First slide" />
            </div>
          </div>
        </div>
        <div className={styles.nonColoredBackground}>
          <h1 className={styles.headingCenter}>Inside Crowd Audit</h1>
          <h2 className={styles.desc}>
            We boast of projects from multiple different kinds of domains. Check out some of our hot projects.
          </h2>
          <div className={styles.landingContainer2}>
            <div className={`text-center ${styles.item1}`}>
              <img className="d-block w-100" src="/item1.png" alt="img" />
              <Link href={`/project/learn`}>
                <a className={`btn ${styles.projectCardButton}`}>View Project</a>
              </Link>
            </div>
            <div className={`text-center ${styles.item2}`}>
              <img className="d-block w-100" src="/item2.png" alt="img" />
              <Link href={`/project/learn`}>
                <a className={`btn ${styles.projectCardButton}`}>View Project</a>
              </Link>
            </div>
            <div className={`text-center ${styles.item3}`}>
              <img className="d-block w-100" src="/item3.png" alt="img" />
              <Link href={`/project/learn`}>
                <a className={`btn ${styles.projectCardButton}`}>View Project</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.coloredBackground}>
          <br />
          <h1 className={styles.headingCenter}>Help us Improve Algorithms</h1>
          <h2 className={styles.desc}>
            We want to harness the power of the crowds, your power, to help improve machine learning systems by
            detecting bias issues. Join our community by creating an account today.
          </h2>
          <div className={styles.section3}>
            <img className="d-block w-100" src="/improve_algorithms.png" alt="img" />
          </div>
        </div>
        <div className={styles.nonColoredBackground}>
          <h1 className={styles.headingCenter}>Impact</h1>
          <h2 className={styles.desc}>
            We boast of over 500 projects, 5000 auditors, 3877 audits, and 450 hypotheses!
          </h2>
          <div className={styles.section4}>
            <img className="d-block w-100" src="/impact.png" alt="img" />
            <Link href={`/`}>
              <a className={`btn ${styles.impactCardButton}`}>Sign Up</a>
            </Link>
          </div>
        </div>
        <div className={styles.coloredBackground}>
          <br />
          <h1 className={styles.headingCenter}>Crowd Audits Community</h1>
          <h2 className={styles.desc}>
            A safe place to discuss harmful biases which are omnipresent in our digital lives.
          </h2>
          <div className={styles.section5}>
            <img className="d-block w-100" src="/crowd_community.png" alt="img" />
            <Link href={`/`}>
              <a className={`btn ${styles.impactCardButton}`}>See Discussions</a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
