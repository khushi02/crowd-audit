import React, { Component } from 'react';
import { withRouter } from 'next/router';
import ProjectNavigation from './ProjectNavigation';
import ProjectAbout from './ProjectAbout';
import ProjectImages from './ProjectImages';
import ProjectDiscussions from './ProjectDiscussions';
import ProjectHypotheses from './ProjectHypotheses';

class ProjectContent extends Component {
  constructor(props) {
    super(props);
    this.handleContentTypeChange = this.handleContentTypeChange.bind(this);
    this.state = {
      contentType: 'about'
    };
  }

  handleContentTypeChange(contentType) {
    this.setState({ contentType });
  }

  renderContent() {
    switch (this.state.contentType) {
      case 'about':
        return <ProjectAbout projectId={this.props.router.query.id} />;
      case 'images':
        return <ProjectImages projectId={this.props.router.query.id} />;
      case 'discussions':
        return <ProjectDiscussions projectId={this.props.router.query.id} />;
      case 'hypotheses':
        return <ProjectHypotheses projectId={this.props.router.query.id} />;
    }
  }

  render() {
    return (
      <div>
        <ProjectNavigation projectId={this.props.router.query.id} onContentTypeChange={this.handleContentTypeChange} />
        {this.renderContent()}
      </div>
    );
  }
}

export default withRouter(ProjectContent);

