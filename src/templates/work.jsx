import React from "react";
import Helmet from "react-helmet";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./work.css";
import Transition from "../components/Transition/Transition"
import Arrow from "../components/Icons/Arrow"


export default class PostTemplate extends React.Component {

  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Transition>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="container header--work header-offset">
            <h1 className="work__title">{post.title}</h1>
            <div className="work__intro">
              {post.intro.split("\n").map( (val, i) => { 
                return <p key={i}>{val}</p> 
              })}
            </div>
            { post.link ? <div className="work__link"><a href={post.link}>{post.link_text} <Arrow classes="work__arrow" /></a></div> : "" }
          </div>
          <div className="container work__list gutter-top">
            <strong>Scope: </strong>
            <ul className="scope__list">
              { post.scope.map( val => (
                <li key={val} className="scope__item">{val}</li>
              ))}
            </ul>
          </div>
          <div className="container work__list">
            <strong>Stack: </strong>
            <ul className="scope__list">
              { post.stack.map( (val, i) => (
                <li key={i} className="scope__item">{val}</li>
              ))}
            </ul>
          </div>
          <div className="container gutter-top">
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </div>
        </div>
      </Transition>
    );
  }

}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        intro
        link
        link_text
        category
        tags
        scope
        stack
      }
      fields {
        slug
      }
    }
  }
`;
