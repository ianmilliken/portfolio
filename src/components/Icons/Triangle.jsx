import React from "react"


class Triangle extends React.Component {

	render() {
		return (
			<svg className={this.props.classes ? this.props.classes : ""} width="350px" height="378px" viewBox="0 0 350 378" version="1.1">
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Desktop-Copy-2" transform="translate(-641.000000, -246.000000)" fill={this.props.color ? this.props.color : "#FFFFFF"}>
						<path id="A" d="M640.971913,624.033149 L677.744656,246 L990.971913,460.825469 C684.919877,603.539877 945.440239,482.057237 640.971913,624.033149 Z" />
					</g>
				</g>
			</svg>
		)
	}
}


export default Triangle