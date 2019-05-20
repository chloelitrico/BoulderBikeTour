import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

class Navigation extends React.Component {

	constructor () {
		super()
		this.state = {
		  isVisible: false
		}
	}

	toggleVisible() {
		this.setState({
		  isVisible: !this.state.isVisible
		})
	}

	render() {
    	return (
			<div>
				<header class="navbar">
					<ul class="navbar__list">
						<li class="navbar__item">
						<button onClick={()=>this.toggleVisible()} class="navbar__btn">
							<i class="fas fa-bars"></i>
						</button>
						</li>
					</ul>
					
					<ul class="navbar__list">
						<li class="navbar__item navbar__item--social">
						<a href="#" class="navbar__link" target="_blank"><i class="fab fa-instagram"></i></a>
						</li>
						<li class="navbar__item navbar__item--social">
						<a href="#" class="navbar__link" target="_blank"><i class="fab fa-twitter"></i></a>
						</li>
						<li class="navbar__item navbar__item--social">
						<a href="#" class="navbar__link" target="_blank"><i class="fab fa-facebook-f"></i></a>
						</li>
						<li class="navbar__item navbar__item--social">
						<a href="#" class="navbar__link" target="_blank"><i class="fab fa-youtube"></i></a>
						</li>
					</ul>
				</header>
					
					{this.state.isVisible?
						<nav class="nav">
							<ul class="nav__list">
								<button onClick={()=>this.toggleVisible()} class="nav__btn"><i class="fas fa-times"></i></button>
								<li class="nav__item">
								<NavLink class="nav__link" to="/">Home</NavLink>
								</li>
								<li class="nav__item">
								<NavLink class="nav__link" to="/about">About</NavLink>
								</li>
								<li class="nav__item">
								<NavLink class="nav__link" to="#">Events</NavLink>
								</li>
								<li class="nav__item">
								<NavLink class="nav__link" to="/contact">Contact</NavLink>
								</li>
							</ul>
						</nav>
						:null
					}
			</div>
		);
	}
}

export default Navigation;