module.exports = {
	blogPostDir: "sample-posts", // The name of directory that contains your posts.
	workDir: "work",
	aboutDir: "about",
	siteTitle: "Ian Milliken – User Interface Design, User Experience Design, Front End Development, Branding", // Site title.
	siteTitleAlt: "Ian Milliken – User Interface Design, User Experience Design, Front End Development, Branding", // Alternative site title for SEO.
	siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
	siteUrl: "", // Domain of your website without pathPrefix.
	pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
	siteDescription: "Ian Milliken – User Interface Design, User Experience Design, Front End Development, Branding", // Website description used for RSS feeds/meta description tag.
	siteRss: "/rss.xml", // Path to the RSS file.
	siteFBAppID: "", // FB Application ID for using app insights
	googleAnalyticsID: "", // GA tracking ID.
	disqusShortname: "", // Disqus shortname.
	postDefaultCategoryID: "Tech", // Default category for posts.
	userName: "Ian Milliken", // Username to display in the author segment.
	userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
	userLocation: "Leeds, UK", // User location to display in the author segment.
	userAvatar: "", // User avatar to display in the author segment.
	userEmail: "ianmilliken@live.co.uk",
	userDescription:
		"", // User description to display in the author segment.
	// Links to social profiles/projects you want to display in the author segment/navigation bar.
	userLinks: [
		{
			label: "GitHub",
			url: "https://github.com/ianmilliken",
			iconClassName: "fa fa-github"
		},
		{
			label: "Behance",
			url: "https://www.behance.net/ianmilliken90",
			iconClassName: "fa fa-behance"
		},
		{
			label: "LinkedIn",
			url: "https://www.linkedin.com/in/ian-milliken-b733963a/",
			iconClassName: "fa fa-linkedin"
		}
	],
	copyright: "© 2018 Ian Milliken", // Copyright string for the footer of the website and RSS feed.
	themeColor: "#00DEA1", // Used for setting manifest and progress theme colors.
	backgroundColor: "#111310" // Used for setting manifest background color.
};
