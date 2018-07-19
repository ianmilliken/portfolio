import React from 'react'


class Phaser extends React.Component {
	render() {
		const CustomTag = this.props.tag ? this.props.tag : 'div'
		return (
			<CustomTag className={`phaser anim-title delay-${this.props.delay}`}>
				<span className={this.props.childClass}>{this.props.value}</span>
			</CustomTag>
		)
	}
}


export default Phaser