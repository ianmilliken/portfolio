import React from "react"
import Helmet from "react-helmet"
import anime from "animejs"
import PostListing from "../components/PostListing/PostListing"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import Triangle from "../components/Icons/Triangle"
import Circle from "../components/Icons/Circle"

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var circle_animation = anime({
      targets: '.shape--left',
      translateX: function() { return anime.random(-75, 150) + '%'; },
      translateY: function() { return anime.random(-75, 150) + '%'; },
      duration: function() { return anime.random(15000, 20000); },
      direction: 'alternate',
      loop: true,
      easing: 'easeInCubic'
    });
    var triangle_animation = anime({
      targets: '.shape--right',
      translateX: function() { return anime.random(-75, 150) + '%'; },
      translateY: function() { return anime.random(-75, 150) + '%'; },
      duration: function() { return anime.random(15000, 20000); },
      direction: 'alternate',
      loop: true,
      easing: 'easeInCubic'
    });
  }
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
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
          <Circle classes="shape shape--left" color="#00DEA1"/>
          <Triangle classes="shape shape--right" color="#00DEA1"/>
        </div>
        <PostListing postEdges={postEdges} />
      </div>
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
