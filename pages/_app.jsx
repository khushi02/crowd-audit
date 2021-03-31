import React, { Fragment } from 'react'
import App from 'next/app'
import { CssBaseline } from '@material-ui/core'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

class _App extends App {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, ...other } = this.props

    return (
      <Fragment>
        <CssBaseline />
        <Navigation />
        <Component {...other} />
        <Footer />
      </Fragment>
    )
  }
}

export default _App
