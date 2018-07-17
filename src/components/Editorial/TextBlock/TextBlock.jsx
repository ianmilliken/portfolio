import React from "react"
import "./TextBlock.css"


class TextBlock extends React.Component {
	render() {
		return (
			<div className="container container--wide gutter-top">
				<div className="textblock">
					<div className="container">
						<p>{this.props.children}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default TextBlock