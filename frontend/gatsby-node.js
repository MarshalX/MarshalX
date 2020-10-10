const _ = require("lodash")
const CryptoJS = require("crypto-js")

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const config = require("./config")

  const postTemplate = require.resolve("./src/templates/post.jsx")
  const categoryTemplate = require.resolve("./src/templates/category.jsx")

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
              data {
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
      }
    `)
  )

  const categorySet = new Set()
  const postsList = result.data.allPrismicPost.edges

  // Double check that the post has a category assigned
  postsList.forEach(edge => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach(cat => {
        categorySet.add(cat.category.document[0].uid)
      })
    }

    const post_path = `/blog/post/${edge.node.uid}`
    const post_uid = `${CryptoJS.MD5(edge.node.uid)}`.slice(0, 6)
    const instant_view_path = `https://t.me/iv?url=${config.url}${post_path}&rhash=${config.instantView}`

    createPage({
      path: post_path,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })

    createRedirect({
      fromPath: `/${post_uid}`,
      toPath: post_path,
      isPermanent: true,
      redirectInBrowser: true,
    })
    createRedirect({
      fromPath: `/${post_uid}/iv`,
      toPath: instant_view_path,
      isPermanent: false,
      redirectInBrowser: true,
    })
  })

  const categoryList = Array.from(categorySet)

  categoryList.forEach(category => {
    createPage({
      path: `/blog/category/${category}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}
