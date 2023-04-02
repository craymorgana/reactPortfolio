import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="fixed-top">
			<div className="d-flex justify-content-around ">
				<>
					<Link className="header-link" to="/">
						Home
					</Link>
				</>
			</div>
		</header>
	);
};

export default Header;
