/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const prismicHtmlSerializer = require("./src/gatsby/htmlSerializer")

module.exports = {
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `marshal`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: () => post => `/${post.uid}`,
        htmlSerializer: () => prismicHtmlSerializer,
      },
    },
    "gatsby-plugin-lodash",
    "gatsby-plugin-sharp",
  ],
}
