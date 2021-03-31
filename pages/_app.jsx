import React, { Fragment } from 'react'
import App from 'next/app'
import { CssBaseline } from '@material-ui/core'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Footer from '../components/Footer'
import PageNavigation from '../components/organisms/PageNavigation'

const _App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <CssBaseline />
      <PageNavigation />
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
