import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
	render() {
    	return (
			<div>

				<header class="navbar">
					<ul class="navbar__list">
						<li class="navbar__item">
						<button class="js-open-nav navbar__btn">
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

					<nav class="nav">
					<ul class="nav__list">
						<button class="js-close-nav nav__btn"><i class="fas fa-times"></i></button>
						<li class="nav__item">
						<a class="nav__link"><NavLink to="/">Home</NavLink></a>
						</li>
						<li class="nav__item">
						<a class="nav__link"><NavLink to="/about">About</NavLink></a>
						</li>
						<li class="nav__item">
						<a class="nav__link"><NavLink to="#">Events</NavLink></a>
						</li>
						<li class="nav__item">
						<a class="nav__link"><NavLink to="/contact">Contact</NavLink></a>
						</li>
					</ul>
					</nav>

			</div>
		);
	}
}
export default Navigation;