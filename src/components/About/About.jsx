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
			postList.map(post => (
				<div className="container">
					<div key={post} className="banner">
						<h1 className="header-offset">{post.title}</h1>
						<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
					</div>
					<div className="content">
						<h2>{post.skill_title}</h2>
						<p>{post.skill_intro}</p>
						<ul className="skills">
							{ post.skills.map(skill => (
								<li key={skill} className="skills__item">
									<h4 className="skills__title">{skill}</h4>
								</li>
							))}
						</ul>
					</div>
				</div>
			))
		)
	}
}

export default About;
