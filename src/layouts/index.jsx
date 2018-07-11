import React from "react"
import Helmet from "react-helmet"
import anime from "animejs"
import config from "../../data/SiteConfig"
import "./index.css"
import "./font-awesome.css"
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"
import Triangle from "../components/Icons/Triangle"
import Circle from "../components/Icons/Circle"


export default class MainLayout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contactPanel: false
    }
  }

  componentDidMount() {
    /*var circle_animation = anime({
      targets: '.shape--left',
      translateX: function() { return anime.random(-100, 25) + '%'; },
      translateY: function() { return anime.random(-75, 150) + '%'; },
      duration: function() { return anime.random(15000, 20000); },
      direction: 'alternate',
      loop: true,
      easing: 'easeInCubic'
    });
    var triangle_animation = anime({
      targets: '.shape--right',
      translateX: function() { return anime.random(-75, 75) + '%'; },
      translateY: function() { return anime.random(-50, 75) + '%'; },
      duration: function() { return anime.random(10000, 15000); },
      direction: 'alternate',
      loop: true,
      easing: 'easeInCubic'
    });*/
  }

  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath === "work/") {
      title = "Work";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }

  getLocalMenu() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let menu = 0;
    if (currentPath === "work/") {
      menu = 1;
    }
    return menu;
  }

  render() {
    const { children } = this.props;
    const pathname = this.props.location.pathname
    console.log(pathname)
    let background_color
    let text_color
    if (pathname.includes("/work/")) {
      background_color = "#F9F9F9"
      text_color = "#111310"
    } else if (pathname === "/about/") {
      background_color = "#00DEA1"
      text_color = "#FFFFFF"
    } else {
      background_color = "#111310"
      text_color = "#FFFFFF"
    }
    return (
      <div style={{ backgroundColor: background_color, color: text_color }}>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Circle classes="shape shape--left" color="#00DEA1"/>
        <Triangle classes="shape shape--right" color="#00DEA1"/>
        <Header config={config} />
        <Nav menu={this.getLocalMenu()} />
        <main>{children()}</main>
        <Footer config={config} />
      </div>
    );
  }
}
