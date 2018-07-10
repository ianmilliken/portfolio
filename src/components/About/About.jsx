import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="banner">
			<h1 className="header-offset">
	          A british born designer + developer living in Leeds, UK.
	        </h1>
	        <p>
	        	I got my first professional gig about 7 years ago, and since then I have been lucky enough to work with all kinds of talented people, on all sorts of projects.
	    	</p>
	    	<p>
				Primarily I work in UI & UX Design and Front End Development, covering everything from wireframes and UAT, to coding and optimisation. I also work in the related disciplines of branding, graphic design, and photography.
	    	</p>
			<p>
				I’ve recently relocated to Leeds after 2 years overseas where I was working as the Lead Designer at Chorck, which is a SAAS startup located in Brisbane.
			</p>
			<p>
				I’m always keen to discuss new opportunuties, so if you’d like to work with me on something please get in touch.
			</p>
        </div>
      </div>
    );
  }
}

export default About;
