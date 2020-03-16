const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const indexPage = path.resolve(`src/components/main.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1) {
        edges {
          node {
            html
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
      context: {
        html: node.html,
      }, // additional data can be passed via context
    })
  })
}
