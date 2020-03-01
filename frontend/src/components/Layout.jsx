import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import { theme, main } from "../styles"
import Navbar from "./Navbar"

const PureLayout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={main} />
      {/*TODO SEO*/}
      <Navbar />
      {children}
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.prismicHomepage.data.footer.html,
          }}
        />
      </div>
    </>
  </ThemeProvider>
)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                footer {
                  html
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
