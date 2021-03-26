import React, { Component } from 'react';
import data from '../../public/projects/data'

class ProjectHypotheses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: data[this.props.projectId - 1]
    }
  }

  render() {
    return (
      <div style={{ margin: '8% 9%' }}>
        <p>This is the hypotheses page for the project - {this.state.project.title}</p>
      </div>
    );
  }
}

export default ProjectHypotheses;