import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const Blog = ({ data }) => (
  <pre>
    {data.allFile.nodes.map(node => (
      <Link to={`/blog${node.childMarkdownRemark.frontmatter.path}`}>
        {node.childMarkdownRemark.frontmatter.title}
      </Link>
    ))}
  </pre>
)

export const query = graphql`
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
`

export default Blog
