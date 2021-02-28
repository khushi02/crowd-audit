import React, { Component } from 'react';
import styles from './ProjectAbout.module.scss';
import data from '../../public/projects/data'

class ProjectAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: data[this.props.projectId - 1]
    }
  }

  renderStatBoxes() {
    const metrics = ['Audits', 'Labels', 'Hypotheses Created', 'Images Audited', 'Discussions Posted'];
    const boxes = [];
    if (this.state.project.stats) {
      for (let i = 0; i < metrics.length; i++) {
        boxes.push(
          <div className={styles.statBox} key={`statBox-${i}`}>
            <p className={styles.figure}>{this.state.project.stats[i]}</p>
            <p className={styles.metric}>{metrics[i]}</p>
          </div>
        );
      }
    }
    return boxes;
  }

  renderAbouts() {
    const titles = ['What is this project about?', 'What will you see in this project?', 'How can you help?'];
    const paragraphs = [];
    if (this.state.project.abouts) {
      for (let i = 0; i < titles.length; i++) {
        paragraphs.push(
          <div key={`about-${i}`} style={{ marginBottom: '60px', width: '60%' }}>
            <h5 style={{ fontSize: '22px' }}>{titles[i]}</h5>
            <p style={{ marginTop: '20px' }}>{this.state.project.abouts[i]}</p>
          </div>
        );
      }
    }
    return paragraphs;
  }

  render() {
    return (
      <div style={{ margin: '8% 9%' }}>
        <div style={{ marginBottom: '80px' }}>
          <h5 style={{ fontSize: '22px' }}>Project Stats</h5>
          <div className={styles.statBoxContainer}>
            {this.renderStatBoxes()}
          </div>
        </div>
        <div style={{ marginBottom: '80px' }}>
          <h5 style={{ fontSize: '22px' }}>Project Data</h5>
          <div className={`progress ${styles.bar}`}>
            <div className={`progress ${styles.barProgress}`} style={{ width: `${this.state.project.progress}%` }}></div>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          {this.renderAbouts()}
        </div>
      </div >
    );
  }
}

export default ProjectAbout;