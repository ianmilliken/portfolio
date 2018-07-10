import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
  	const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={`About | ${config.siteTitle}`} />
        <About data={postEdges} />
      </div>
    );
  }
}

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutQuery {
    allMarkdownRemark(
      filter: { fields: { name: { eq: "about" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skill_title
            skill_intro
            skills
          }
          html
        }
      }
    }
  }
`;