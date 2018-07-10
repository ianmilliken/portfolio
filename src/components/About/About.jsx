import React, { Component } from "react"
import "./About.css"

class About extends Component {
	constructor(props) {
		super(props)
	}
	getPostList() {
	    const postList = []
	    this.props.data.forEach(edge => {
	    	postList.push({
	        	title: edge.node.frontmatter.title,
	        	html: edge.node.html,
	        	skill_title: edge.node.frontmatter.skill_title,
	        	skill_intro: edge.node.frontmatter.skill_intro,
	        	skills: edge.node.frontmatter.skills
	        })
	    })
	    return postList
	}

	render() {
		const postList = this.getPostList()
	  	return (
	  		<div className="container">
		  		<div className="banner">
					<p>{this.props.skills}</p>
					{ postList.map(post => (
						<div className="banner">
							<h1 className="header-offset">{post.title}</h1>
							<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
							<h2>{post.skill_title}</h2>
							<p>{post.skill_intro}</p>
							<ul className="list">
								{ post.skills.map(skill => (
									<li key={skill} className="item">
										<h4 className="item__title">{skill}</h4>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default About;
