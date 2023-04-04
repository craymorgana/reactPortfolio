import React from "react";
import LinkedInIcon from "../../assets/linkedin.png";
import MailIcon from "../../assets/mail.png";
import GithubIcon from "../../assets/github.png";

const Footer = () => {
	return (
		<footer className="fixed-top">
			<div className="d-flex justify-content-around ">
				<a href="mailto:aaron.morgan.7@outlook.com">
					<img src={MailIcon} alt="email icon"></img>
				</a>
				<a
					href="https://www.linkedin.com/in/aaronmorgan77777/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={LinkedInIcon} alt="linkedin icon"></img>
				</a>
				<a
					href="https://github.com/craymorgana"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={GithubIcon} alt="github icon"></img>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
