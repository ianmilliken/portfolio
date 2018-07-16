const path = require("path")
const _ = require("lodash")
const webpackLodashPlugin = require("lodash-webpack-plugin")


exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators
	let slug
	if (node.internal.type === "MarkdownRemark") {
		const fileNode = getNode(node.parent)
		const parsedFilePath = path.parse(fileNode.relativePath)
		const name = fileNode.sourceInstanceName
		if (
			Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
			Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
		) {
			slug = `/${name}/${_.kebabCase(node.frontmatter.title)}`
		} else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
			slug = `/${name}/${parsedFilePath.dir}/${parsedFilePath.name}/`
		} else if (parsedFilePath.dir === "") {
			slug = `/${name}/${parsedFilePath.name}/`
		} else {
			slug = `/${name}/${parsedFilePath.dir}/`
		}
		if (
			Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
			Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")
		) {
			slug = `/${_.kebabCase(node.frontmatter.slug)}`
		}
		createNodeField({ node, name: "slug", value: slug })
		createNodeField({ node, name: "name", value: name })
	}
};

exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators

	return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post.jsx")
		const workPage = path.resolve("src/templates/work.jsx")
		const tagPage = path.resolve("src/templates/tag.jsx")
		const categoryPage = path.resolve("src/templates/category.jsx")
		resolve(
			graphql(
				`
					{
						allMarkdownRemark {
							edges {
								node {
									frontmatter {
										tags
										category
									}
									fields {
										slug
										name
									}
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					/* eslint no-console: "off" */
					console.log(result.errors)
					reject(result.errors)
				}

				const tagSet = new Set()
				const categorySet = new Set()
				result.data.allMarkdownRemark.edges.forEach(edge => {
					if (edge.node.frontmatter.tags) {
						edge.node.frontmatter.tags.forEach(tag => {
							tagSet.add(tag)
						})
					}

					if (edge.node.frontmatter.category) {
						categorySet.add(edge.node.frontmatter.category);
					}

					if (edge.node.fields.name !== "about" && edge.node.fields.name !== "post") {
						createPage({
							path: edge.node.fields.slug,
							component: workPage,
							context: {
								slug: edge.node.fields.slug
							}
						})
					}
				})

				const tagList = Array.from(tagSet)
				tagList.forEach(tag => {
					createPage({
						path: `/tags/${_.kebabCase(tag)}/`,
						component: tagPage,
						context: {
							tag
						}
					})
				})

				const categoryList = Array.from(categorySet)
				categoryList.forEach(category => {
					createPage({
						path: `/categories/${_.kebabCase(category)}/`,
						component: categoryPage,
						context: {
							category
						}
					})
				})
			})
		)
	})
}


exports.modifyWebpackConfig = ({ config, stage }) => {
	if (stage === "build-javascript") {
		config.plugin("Lodash", webpackLodashPlugin, null)
	}
	if (stage === 'build-html') {
		config.loader('null', {
			test: /webfontloader/,
			loader: 'null-loader'
		})
	}
}
