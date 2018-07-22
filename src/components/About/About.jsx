import React, { Component } from "react"
import Revealer from "../../components/Revealer/Revealer"
import "./About.css"


class About extends Component {

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
				<div key={post} className="container">
					<div className="banner">
						<div className="header-offset">
							<h1 className="anim-title">{post.title}</h1>
						</div>
						<Revealer>
							<div dangerouslySetInnerHTML={{ __html: post.html }} />
						</Revealer>
					</div>
					<div className="gutter-top">
						<Revealer>
							<h2>{post.skill_title}</h2>
						</Revealer>
						<Revealer>
							<p>{post.skill_intro}</p>
						</Revealer>
						<ul className="skills">
							{ post.skills.map(skill => (
								<li key={skill}>
									<Revealer>
										<div className="skills__item">
											<img src={skill.image} alt={skill.name} />
											<h4 className="skills__title">{skill.name}</h4>
										</div>
									</Revealer>
								</li>
							))}
						</ul>
					</div>
				</div>
			))
		)
	}
}


export default About
