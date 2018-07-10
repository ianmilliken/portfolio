import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import Transition from "../components/Transition/Transition"

class AboutPage extends Component {
  render() {
  	const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Transition>
		<div>
        <Helmet title={`About | ${config.siteTitle}`} />
        <About data={postEdges} />
      </div>
      </Transition>
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