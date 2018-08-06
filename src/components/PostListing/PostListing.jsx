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
			<div className="container scroll-indicator__wrapper">
				<span className="scroll-indicator">	
					<svg className="scroll-indicator__mouse" width="21px" height="35px" viewBox="0 0 21 35" version="1.1">
					    <g stroke="#00dea1" strokeWidth="1" fill="none" fillRule="evenodd">
					        <g transform="translate(-500.000000, -509.000000)">
					            <rect x="500.5" y="509.5" width="20" height="34" rx="10" />
					        </g>
					    </g>
					</svg>
				</span>
				<h4 className="label label--large center">Selected Works</h4>
				<ul className="list">
					{// Your post list here.
					postList.map((post, i) => (
						<li key={post.title} className="item">
							<Revealer>
								<Link to={post.path} className="item__link">
									<span className="item__order">0{i+1}</span>
									<div>
										<h2 className="item__title">{post.title}</h2>
										<div className="item__date hide-at-tablet">{post.date}</div>
									</div>
									<div className="item__date show-at-tablet">{post.date}</div>
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
