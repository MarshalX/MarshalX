import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { main, theme } from "../styles"
import { Footer, Navbar, ScrollToTopButton } from "../components"
import SEO from "./SEO"

class PureLayout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Global styles={main} />
        {!this.props.customSEO && <SEO />}
        <Navbar main={this.props.mainNavBar} />
        {this.props.children}
        <Footer data={this.props.data} />
        <ScrollToTopButton />
      </ThemeProvider>
    )
  }
}

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            footer: prismicFooter {
              data {
                body {
                  primary {
                    title {
                      text
                    }
                    content {
                      html
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    )
  }
}

export default Layout
