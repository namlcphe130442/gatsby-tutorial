import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Prism from "prismjs"

export default ({ data }) => {
  const post = data.markdownRemark;
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <script src="prism.js"></script>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`