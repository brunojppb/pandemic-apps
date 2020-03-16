const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const indexPage = path.resolve(`src/pages/main.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: "/",
      component: indexPage,
      context: {}, // additional data can be passed via context
    })
  })
}
