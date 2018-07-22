import React from "react"
import Helmet from "react-helmet"
import RehypeReact from "rehype-react" 
import Link from "gatsby-link"
import SEO from "../components/SEO/SEO"

import Transition from "../components/Transition/Transition"
import Arrow from "../components/Icons/Arrow"
import Phaser from "../components/Phaser/Phaser"
import Revealer from "../components/Revealer/Revealer"
import Video from "../components/Video/Video" 
import Header from "../components/Editorial/Header/Header" 
import Grid from "../components/Editorial/Grid/Grid"
import LogoWall from "../components/Editorial/LogoWall/LogoWall"
import TextBlock from "../components/Editorial/TextBlock/TextBlock"
import Wrapper from "../components/Editorial/Wrapper/Wrapper"

import config from "../../data/SiteConfig"
import "./work.css"
 

const RenderAst = new RehypeReact({ 
	createElement: React.createElement, 
	components: {
		"c-video": Video,
		"c-header": Header,
		"c-grid": Grid,
		"c-logowall" : LogoWall,
		"c-text" : TextBlock,
		"c-revealer": Revealer,
		"wrapper": Wrapper,
	} 
}).Compiler


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
						<div className="work__header-titles">
							<Revealer>
								<h1 className="work__title anim-title">{post.title}</h1>
							</Revealer>
							{ post.link ? <div className="work__link self--end anim-title delay-400"><a href={post.link} target="_blank">{post.link_text} <Arrow classes="work__arrow" /></a></div> : "" }
						</div>
						<div>
							<div className="work__list">
								<Phaser tag="strong" value="Year" delay="400" childClass="list__title" />
								<Phaser value={post.date} delay="400" childClass="scope__list" />
							</div>
							<div className="work__list gutter-top--medium">
								<Phaser tag="strong" value="Scope" delay="600" childClass="list__title" />
								<ul className="scope__list">
									{ post.scope !== null ? post.scope.map( val => (
										<Phaser key={val} tag="li" value={val} delay="600" childClass="scope__item" />
									)) : "" }
								</ul>
							</div>
							<div className="work__list gutter-top--medium">
								<Phaser tag="strong" value="Stack" delay="800" childClass="list__title" />
								<ul className="scope__list">
									{ post.stack !== null ? post.stack.map( val => (
										<Phaser key={val} tag="li" value={val} delay="800" childClass="scope__item" />
									)) : "" }
								</ul>
							</div>
						</div>
					</div>
					<div className="gutter-top">
						<div className="container container--wide">
							<Revealer>
								<div className="work__intro">
									<div className="container">
										<p>{post.intro}</p>
									</div>
								</div>
							</Revealer>
						</div>
						{/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}
						<div className="work-content">{RenderAst(postNode.htmlAst)}</div>
					</div>
					<div className="container gutter-top--large center">
						<Revealer>
							<div className="work__contact">
								<h4 className="work__title">Ready to get in touch?</h4>
								<div className="work__link gutter-top--medium">
									<Link to="/contact/">Contact me</Link>
								</div>
							</div>
						</Revealer>
					</div>
				</div>
			</Transition>
    	)
	}
}


/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query WorkPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			htmlAst
			frontmatter {
				title
				date(formatString: "YYYY")
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
