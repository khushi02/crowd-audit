import React from 'react';
import App, { Container } from 'next/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Container>
    );
  }
}

export default MyApp;