import React, { Fragment } from 'react'
import App from 'next/app'
import { CssBaseline } from '@material-ui/core'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const _App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  )
}

_App.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default _App
