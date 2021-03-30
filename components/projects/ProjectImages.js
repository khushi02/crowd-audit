import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import styles from './ProjectImages.module.scss'
import data from '../../public/projects/data'

class ProjectImages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: data[this.props.projectId - 1]
    }
  }

  renderImages() {
    const images = []
    for (let i = 0; i < 100; i++) {
      images.push(
        <div className={styles.image} key={`img-${i}`}>
          <Image src={this.state.project.thumbnail} rounded fluid />
        </div>
      )
    }
    return images
  }

  render() {
    return (
      <div style={{ margin: '8% 9%' }}>
        <div style={{ marginBottom: '80px' }}>
          <h5 style={{ fontSize: '16px' }}>2234 images under this project</h5>
          <div className={styles.imageContainer}>{this.renderImages()}</div>
        </div>
      </div>
    )
  }
}

export default ProjectImages
