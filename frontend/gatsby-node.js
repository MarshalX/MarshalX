const _ = require("lodash")

const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

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

    createPage({
      path: `/blog/post/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
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
