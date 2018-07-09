import React, { Component } from "react"
import Link from "gatsby-link"
import UserLinks from "../UserLinks/UserLinks"
import Logo from "../../assets/logo.svg"
import "./Footer.css"

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <Logo />
        <div>Ian Milliken</div>
        <p>UI & UX Design<span>{`  //  `}</span>Front End Development<span>{`  //  `}</span>Branding</p>
        <a href={'mailto:' + (config.userEmail)}>{config.userEmail}</a>
        <p>{copyright}</p>
      </footer>
    );
  }
}

export default Footer;
