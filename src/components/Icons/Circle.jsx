import React from "react"


class Circle extends React.Component {

	render() {
		return (
			<svg className={this.props.classes ? this.props.classes : ""} width="456px" height="456px" viewBox="0 0 456 456" version="1.1">
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Desktop-Copy-2" transform="translate(-136.000000, -54.000000)" fill={this.props.color ? this.props.color : "#FFFFFF"}>
						<circle id="Oval-2" cx="364" cy="282" r="228" />
					</g>
				</g>
			</svg>
		)
	}
}


export default Circle