import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import flush from 'styled-jsx/server'

class _Document extends Document {
  static async getInitialProps(ctx) {
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => materialSheets.collect(<App {...props} />)
      })
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
          {flush() || null}
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _Document
