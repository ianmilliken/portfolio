import React from "react"


class Logo extends React.Component {

	render() {
		let width
		let height
		if (this.props.width) {
			width = `${this.props.width}px`
		} else {
			width = "24px"
		}
		if (this.props.height) {
			height = `${this.props.height}px`
		} else {
			height = "23px"
		}
		return (
			<svg className={this.props.classes ? this.props.classes : ``} width={width} height={height} viewBox="0 0 48 46" version="1.1">
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<g id="logo" fill={this.props.color ? this.props.color : "#ffffff"}>
						<polygon id="i" points="0.970865718 16.2721795 10.901057 16.2721795 10.901057 35.3765309 0.970865718 35.3765309"></polygon>
						<path id="a" d="M15.7055513,23.6224008 L17.9948745,5.77315973e-14 L37.562232,13.4304632 C18.4499988,22.3426439 34.7188855,14.7563375 15.7055513,23.6224008 Z" />
						<path id="n" d="M14.439384,28.5627271 L26.4028876,30.8903912 L23.2061961,24.6165308 L31.6651442,20.3064815 L40.3383382,37.3285833 C24.6601155,45.3170367 39.0014355,38.0097692 23.3232128,45.9982227 L14.439384,28.5627271 Z" />
						<ellipse id="dot" cx="43" cy="21.0086102" rx="5" ry="5.00205004" />
					</g>
				</g>
			</svg>
		)
	}
}


export default Logo