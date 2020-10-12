import React from "react"
import { graphql } from "gatsby"
import { Layout, Listing, PostSliceZone } from "../components"
import Categories from "../components/Listing/Categories"
import Section from "../components/Section"
import website from "../../config"
import SEO from "../components/SEO"
// import ShortLinkButton from "../components/ShortLinkButton"

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost
  let categories = false
  if (data.categories[0].category) {
    categories = data.categories.map(c => [
      c.category.document[0].uid,
      c.category.document[0].data.name,
    ])
  }

  const header = (
    <>
      {data.date} — {categories && <Categories categories={categories} />}{" "}
      {/*<ShortLinkButton uid={data.uid} />*/}
    </>
  )

  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        headline={`${data.title.text}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPost}
        blog
        article
      />
      <Section
        dark={true}
        id="post_header"
        name={data.title.text}
        masthead={true}
      />
      <Section id="post" name={header}>
        <PostSliceZone allSlices={data.body} />
      </Section>
      <Section dark={true} id="recent_posts" name="Недавние посты">
        <Listing posts={posts.nodes} />
      </Section>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        date(formatString: "DD.MM.YYYY")
        categories {
          category {
            document {
              uid
              data {
                name
              }
            }
          }
        }
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 450, quality: 90) {
                      ...GatsbyImageSharpFluid
                      presentationWidth
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPostBodyEmbed {
            slice_type
            id
            primary {
              plane_html {
                text
              }
            }
          }
        }
      }
    }
    posts: allPrismicPost(
      limit: 2
      sort: { fields: [data___date], order: DESC }
      filter: { uid: { ne: $uid } }
    ) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                uid
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
