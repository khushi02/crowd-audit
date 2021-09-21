import React, { Component } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import DiscussionBoard from '../components/organisms/discussion/DiscussionBoard'

class Index extends Component {
  render() {
    return (
      <div>
        <div className={styles.headmain}>
          <div className={styles.imgCont}>
          <img src="/profpic.png" alt="First slide" />
          </div>

          <div className={styles.textCont}>
            <h1 className={styles.heading}>Welcome back, Riya!</h1>
            <p>This is your personal Crowd Audits feed. It showcases updates within any projects, discussions or open questions. Explore more of what’s popular on crowd audits or continue working on your tasks.</p>
          </div>
          <div className={styles.imgCont4}>
            <div className={styles.imgCont2}>
              <img src="/discussion_board.png" alt="First slide" />
            </div>
            <div className={styles.imgCont3}>
              <img src="/scoreboard.png" alt="First slide" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
