import React from "react"
import ReactPlayer from "react-player"
import "./Video.css"
 
 
export default class Video extends React.Component {

	render() {
		return (
			<div className="video-wrapper">
				<div className="video">
					<ReactPlayer url={this.props.url} playing="true" muted="true" volume="0" loop="true" width="100%" height="100%" />
				</div>
			</div>
		)
    }
}