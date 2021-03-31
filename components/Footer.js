import React from 'react'
import styles from './Footer.module.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.landingContainer}>
          <div className={styles.left}>
            <p>Crowd Audit</p>
          </div>
          <div className={styles.right}>
            <p>Contact Us</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
