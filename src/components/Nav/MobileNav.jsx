import React from "react"
import Link from "gatsby-link"
import anime from "animejs"
import { Transition } from "react-transition-group"
import "./MobileNav.css"

import BrandIcon from "../Icons/BrandIcon"


class MobileNav extends React.Component {

	constructor(props) {
		super(props)
		this.state = { 
			exiting: false
		}
		this.svgPath = React.createRef()
		this.closeButton = React.createRef()
		this.socialTitle = React.createRef()
		this.handleClose = this.handleClose.bind(this)
		this.handleAnimationsIn = this.handleAnimationsIn.bind(this)
		this.handleAnimationsOut = this.handleAnimationsOut.bind(this)
	}

	handleClose(e) {
		e.preventDefault()
		this.props.handleMobileMenu(e)
	}

	handleAnimationsIn() {
		// Background Enter
		const animateBackground = anime({
			targets: this.svgPath.current,
			d: 'M0-1h320v429.507c-97 54.657-217 54.657-320 0V-1z',
			easing: 'easeInOutExpo',
			duration: 400
		})
		// Links Enter
		const animateLinks = anime({
			targets: '.xsnav__list .xsnav__link',
			translateY: 0,
			opacity: 1,
			easing: 'easeInOutBack',
			duration: 800,
			delay: function(el, i, l) {
				return i * 100;
			}
		})
		// Social Links Enter
		const animateSocial = anime({
			targets: '.xsnav__social__list .xsnav__social__link',
			translateY: 0,
			opacity: 1,
			easing: 'easeInOutBack',
			duration: 800,
			delay: function(el, i, l) {
				return i * 100;
			}
		})
		// Social Title Exit
		const animateTitle = anime({
			targets: this.socialTitle.current,
			opacity: 1,
			easing: 'easeInOutBack',
			duration: 600
		})
		// Close Button Enter
		const animateCloseButton = anime({
			targets: this.closeButton.current,
			translateY: 0,
			easing: 'easeInOutBack',
			duration: 600
		})
	}

	handleAnimationsOut() {
		// Background Exit
		const animateBackground = anime({
			targets: this.svgPath.current,
			d: 'M0 0h320v.166c-97 .445-217 .445-320 0V0z',
			easing: 'easeInOutExpo',
			duration: 800
		})
		// Links Exit
		const animateLinks = anime({
			targets: '.xsnav__list .xsnav__link',
			translateY: -10,
			opacity: 0,
			easing: 'easeInOutBack',
			duration: 600,
			delay: function(el, i, l) {
				return i * 50;
			}
		})
		// Social Links Exit
		const animateSocial = anime({
			targets: '.xsnav__social__list .xsnav__social__link',
			translateY: -10,
			opacity: 0,
			easing: 'easeInOutBack',
			duration: 400,
			delay: function(el, i, l) {
				return i * 50;
			}
		})
		// Social Title Exit
		const animateTitle = anime({
			targets: this.socialTitle.current,
			opacity: 0,
			easing: 'easeInOutBack',
			duration: 400
		})
		// Close Button Exit
		const animateCloseButton = anime({
			targets: this.closeButton.current,
			translateY: 10,
			easing: 'easeInOutBack',
			duration: 600
		})
	}

	render() {
		const transitionProps = {
			timeout: {
				enter: 400,
				exit: 800,
			},
			onEnter: this.handleAnimationsIn,
			onExit: this.handleAnimationsOut,
			appear: true,
			unmountOnExit: true,
			in: this.props.active,
		}

		const LinkStyle = { transform: `translateY(-10rem)` }
		const ButtonStyle = { transform: `translateY(10rem)` }
		const SocialStyle = { transform: `translateY(4rem)` }

		return (
			<Transition {...transitionProps}>
				{status => (
					<div className={`xsnav ${ this.props.active ? `is-active` : ``}`}>
						<div className="xsnav__background">
							<svg width="100%" height="100%" viewBox="0 0 320 470" preserveAspectRatio="none" version="1.1">
							    <g stroke="none" strokeWidth="1" fill="#21e3b1" fillRule="evenodd">
									<path ref={this.svgPath} d="M0 0h320v.166c-97 .445-217 .445-320 0V0z" />
							    </g>
							</svg>
						</div>
						<div className="xsnav__list">
							<Link to="/" className="xsnav__link" style={LinkStyle}>
								<span className="xsnav__link__title">Home</span>
								<span className="xsnav__link__meta">Find my selected works</span>
							</Link>
							<Link to="/about" className="xsnav__link" style={LinkStyle}>
								<span className="xsnav__link__title">About</span>
								<span className="xsnav__link__meta">A little bit of Ian 101</span>
							</Link>
							<Link to="/contact" className="xsnav__link" style={LinkStyle}>
								<span className="xsnav__link__title">Contact</span>
								<span className="xsnav__link__meta">Email me or give me a call</span>
							</Link>
						</div>
						<div className="xsnav__social">
							<span className="xsnav__link__meta" ref={this.socialTitle} style={{ opacity: 0 }}>Follow me in the wild</span>
							<div className="xsnav__social__list">
								<a className="xsnav__social__link" style={SocialStyle} href="https://github.com/ianmilliken"><BrandIcon name="github" size={40} /></a>
								<a className="xsnav__social__link" style={SocialStyle} href="https://www.behance.net/ianmilliken90"><BrandIcon name="behance" size={54} /></a>
								<a className="xsnav__social__link" style={SocialStyle} href="https://www.linkedin.com/in/ian-milliken-b733963a/"><BrandIcon name="linkedin" size={40} /></a>
							</div>
						</div>
						<a href="#" className="xsnav__close" onClick={this.handleClose} ref={this.closeButton} style={ButtonStyle}>
							<svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1">
							    <g strokeLinecap="square">
							        <g transform="translate(-149.000000, -496.000000)" stroke="#ffffff" strokeWidth="2">
							            <g transform="translate(120.000000, 499.000000)">
							                <g transform="translate(32.000000, 0.000000)">
							                    <path d="M-1.5,8.25 L18.5,8.25" transform="translate(8.500000, 8.250000) rotate(-315.000000) translate(-8.500000, -8.250000)" />
							                    <path d="M-1.5,8.25 L18.5,8.25" transform="translate(8.500000, 8.250000) scale(-1, 1) rotate(-315.000000) translate(-8.500000, -8.250000)" />
							                </g>
							            </g>
							        </g>
							    </g>
							</svg>
							<span className="xsnav__close__title">Close it</span>
						</a>
					</div>
				)}
				
			</Transition>
		)
	}
}


export default MobileNav