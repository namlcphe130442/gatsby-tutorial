import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import '../components/layout.css'
import './index.css'

export default ({ data }) => {
  return (
    <Layout>
      <h1>All Posts</h1>

      {data.allMarkdownRemark.edges.map(({ node }, index) =>
        <div className = "post-item" key={index}>
          <h3>
            <span>{node.frontmatter.title}</span>
            <span style={{color: `#BBB`}}> — {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: node.html }} /> */}
          <div className = "post-link">
            <Link to={node.fields.slug} className="button">Keep reading</Link>
          </div>
        </div>
      )}
      <script src="prism.js" data-manual></script>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`