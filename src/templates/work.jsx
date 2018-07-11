import React from "react"
import Helmet from "react-helmet"
import Waypoint from "react-waypoint"
import UserInfo from "../components/UserInfo/UserInfo"
import Disqus from "../components/Disqus/Disqus"
import PostTags from "../components/PostTags/PostTags"
import SocialLinks from "../components/SocialLinks/SocialLinks"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import "./work.css"
import Transition from "../components/Transition/Transition"
import Arrow from "../components/Icons/Arrow"

import rehypeReact from "rehype-react" 
import Video from "../components/Video/Video" 
 

const renderAst = new rehypeReact({ 
  createElement: React.createElement, 
  components: { "customvideo": Video } 
}).Compiler 


class El extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			inView: false
		}
		this.handleEnter = this.handleEnter.bind(this)
		this.handleLeave = this.handleLeave.bind(this)
	}

	handleEnter() {
		this.setState({ inView: true })
	}

	handleLeave() {
		this.setState({ inView: false })
	}

	render() {
		return (
			<Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave}>
				<div className={this.state.inView ? "is-active" : ""}>{this.props.children}</div>
			</Waypoint>
		)
	}
}


export default class PostTemplate extends React.Component {

	render() {
		const { slug } = this.props.pathContext
		const postNode = this.props.data.markdownRemark
		const post = postNode.frontmatter
		if (!post.id) {
			post.id = slug
		}
		if (!post.category_id) {
			post.category_id = config.postDefaultCategoryID
		}
		return (
			<Transition>
				<div>
					<Helmet>
						<title>{`${post.title} | ${config.siteTitle}`}</title>
					</Helmet>
					<SEO postPath={slug} postNode={postNode} postSEO />
					<div className="container header--work header-offset">
						<El>
							<h1 className="work__title anim-title">{post.title}</h1>
						</El>
						<div className="work__intro">
							{post.intro.split("\n").map( (val, i) => { 
								return <p key={i} className={"anim-title delay-" + (200 * (i + 1))}>{val}</p>
							})}
						</div>
						{ post.link ? <div className="work__link anim-title delay-400"><a href={post.link}>{post.link_text} <Arrow classes="work__arrow" /></a></div> : "" }
					</div>
					<div className="container work__list gutter-top">
						<strong className="anim-title delay-600">Scope: </strong>
						<ul className="scope__list">
							{ post.scope.map( val => (
								<li key={val} className="scope__item anim-title delay-600">{val}</li>
							))}
						</ul>
					</div>
					<div className="container work__list">
						<strong className="anim-title delay-800">Stack: </strong>
						<ul className="scope__list">
							{ post.stack.map( (val, i) => (
								<li key={i} className="scope__item anim-title delay-800">{val}</li>
							))}
						</ul>
					</div>
					<div className="content gutter-top">
						{/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}
						<div>{renderAst(postNode.htmlAst)}</div>
					</div>
				</div>
			</Transition>
    	)
	}
}


/* eslint no-undef: "off"*/
export const pageQuery = graphql`
	query WorkPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			htmlAst
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
`
