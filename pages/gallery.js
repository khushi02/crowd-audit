import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import ProjectList from '../components/ProjectList';
import Footer from '../components/Footer';

class Gallery extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <p>Projects gallery page.</p>
        <ProjectList />
        <Footer />
      </div>
    );
  }
}

export default Gallery;