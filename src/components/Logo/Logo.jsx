import React from "react"

class Logo extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		var width
		var height
		if (this.props.width) {
			width = this.props.width + "px"
		} else {
			width = "24px"
		}
		if (this.props.height) {
			height = this.props.height + "px"
		} else {
			height = "23px"
		}
		return (
			<svg width={width} height={height} viewBox="0 0 24 23" version="1.1">
				<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="Desktop-Copy-2" transform="translate(-40.000000, -40.000000)" fill={this.props.color ? this.props.color : "#FFFFFF"}>
						<path id="Combined-Shape" d="M40.9982696,47.9027567 L45.936166,48.4217505 L44.9376917,57.9215984 L39.9997954,57.4026046 L40.9982696,47.9027567 Z M47.8527757,51.8112004 L48.9974373,40 L58.781116,46.7152316 C49.2249994,51.171322 57.3594427,47.3781687 47.8527757,51.8112004 Z M47.219692,54.2813635 L53.2014438,55.4451956 L51.6030981,52.3082654 L55.8325721,50.1532408 L60.1691691,58.6642916 C52.3300578,62.6585184 59.5007177,59.0048846 51.6616064,62.9991113 L47.219692,54.2813635 Z M61.5,53.0053301 C60.1192881,53.0053301 59,51.8855831 59,50.5043051 C59,49.1230271 60.1192881,48.0032801 61.5,48.0032801 C62.8807119,48.0032801 64,49.1230271 64,50.5043051 C64,51.8855831 62.8807119,53.0053301 61.5,53.0053301 Z"></path>
					</g>
				</g>
			</svg>
		)
	}
}

export default Logo