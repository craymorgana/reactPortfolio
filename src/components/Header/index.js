import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="fixed-top">
			<div className="d-flex justify-content-around ">
				<>
					<Link className="header-link" to="/portfolio">
						PORTFOLIO
					</Link>
					<Link className="header-link" to="/about">
						ABOUT
					</Link>
					<Link className="header-link" to="/resume">
						RESUME
					</Link>
					<Link className="header-link" to="/contact">
						CONTACT
					</Link>
					<Link
						className="header-link"
						to="https://github.com/craymorgana"
						target="_blank"
						rel="noopener noreferrer"
					>
						GITHUB
					</Link>
					<Link
						className="header-link"
						to="https://www.linkedin.com/in/aaronmorgan77777/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LINKEDIN
					</Link>
				</>
			</div>
		</header>
	);
};

export default Header;
