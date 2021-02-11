import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';

class ProjectList extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  
  renderProjects() {
    return null;
  }

  render() {
    return (
      <div>
        {this.renderProjects()};
      </div>
    );
  }
}

const mapStateToProps = ({ projects }) => ({ projects });

export default connect(mapStateToProps, { fetchProjects })(ProjectList);
