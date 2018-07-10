import React from "react"
import Helmet from "react-helmet"
import PostListing from "../components/PostListing/PostListing"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import Transition from "../components/Transition/Transition"

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Transition>
        <div>
          <Helmet title={config.siteTitle} />
          <SEO postEdges={postEdges} />
          <div className="full-height grid-banner">
            <div className="container">
              <div className="center">
                <h1 className="title">Hello. G’day. Ayup.</h1>
                <p className="p--large">My name’s Ian. I design & build awesome products & brands for innovative businesses around the globe.</p>
              </div>
            </div>
            <div className="status">
              <div className="status__l">
                <div className="label">Status</div>
                <div>Available for hire</div>
              </div>
              <div className="status__r">
                <div className="label">Location</div>
                <div>Leeds, UK</div>
              </div>
            </div>
          </div>
          <PostListing postEdges={postEdges} />
        </div>
      </Transition>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { name: { eq: "work" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`;
