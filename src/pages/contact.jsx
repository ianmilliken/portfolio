import React, { Component } from "react"
import Helmet from "react-helmet"
import config from "../../data/SiteConfig"
import Transition from "../components/Transition/Transition"
import UserLinks from "../components/UserLinks/UserLinks"


class ContactPage extends Component {
	render() {
		return (
			<Transition>
					<Helmet title={`Contact | ${config.siteTitle}`} />
					<div className="container">
						<div className="contact-grid header-offset">
							<div>
								<h2 className="feature-title">Get in touch</h2>
								<p className="gutter-top--medium">I am currently avaialble for hire.</p>
								<p>If you’re interested in working with me, then feel free  call or email me, or find me on social media.</p>
							</div>
							<div className="contact-flex">
								<div className="contact-link-wrapper">
									<a className="contact-link" href={`tel:${config.userMobile}`}>{config.userMobile}</a>
									<a className="contact-link gutter-top--small" href={`mailto:${config.userEmail}`}>{config.userEmail}</a>
								</div>
								<div className="contact-social contact-link-wrapper">
									<UserLinks config={config} icon />
								</div>
							</div>
						</div>
					</div>
			</Transition>
		)
	}
}


export default ContactPage