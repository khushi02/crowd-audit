import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import wrapper from '../reducers/configureStore';
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
      <Fragment>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </Fragment>
    );
  }
}

export default wrapper.withRedux(MyApp);