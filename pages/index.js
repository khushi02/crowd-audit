import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class Index extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <p>Landing page for Crowd Audit.</p>
        <Footer />
      </div>
    );
  }
}

export default Index;
