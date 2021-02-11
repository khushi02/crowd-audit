import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class Gallery extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <p>Projects gallery page.</p>
        <Footer />
      </div>
    );
  }
}

export default Gallery;