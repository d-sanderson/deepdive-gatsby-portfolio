// Generate pages for blog posts here!
// docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              path
              date
            }
            excerpt
          }
        }
      }
    }
  `)
  const BlogTemplate = path.resolve(`./src/templates/BlogTemplate.js`)

  console.log(result)
  result.data.allFile.nodes.forEach(node => {
    console.log(JSON.stringify(node, null, 2))
    createPage({
      path: `/blog${node.childMarkdownRemark.frontmatter.path}`,
      component: BlogTemplate,
      context: node,
    })
  })
  console.log('i change gatsby node!')
}
