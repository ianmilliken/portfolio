import React from "react"
import Link from "gatsby-link"
import "./PostListing.css"
import Arrow from "../Icons/Arrow"
import Revealer from "../Revealer/Revealer"


class PostListing extends React.Component {

	getPostList() {
		const postList = []
		this.props.postEdges.forEach(postEdge => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				date: postEdge.node.frontmatter.date,
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead
			})
		})
		return postList
	}

	render() {
		const postList = this.getPostList()
		return (
			<div className="container" style={{ transform: 'translateY(-10rem)' }}>
				<span className="scroll-indicator" />
				<h4 className="label label--large center">Selected Works</h4>
				<ul className="list">
					{// Your post list here.
					postList.map(post => (
						<li key={post.title} className="item">
							<Revealer>
								<Link to={post.path} className="item__link">
									<h2 className="item__title">{post.title}</h2>
									<div className="item__date">{post.date}</div>
									<Arrow classes="item__arrow" />
								</Link>
							</Revealer>
						</li>
					))}
				</ul>
			</div>
		)
	}
}


export default PostListing
