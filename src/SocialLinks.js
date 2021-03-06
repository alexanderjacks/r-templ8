import React, { Component } from 'react';

class SocialLinks extends Component {
	render() {
		return(
			<div className="d-flex justify-content-around">
				<a href="https://www.instagram.com/a.d.jacks/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
				<a href="https://www.linkedin.com/in/alexander-jacks/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
				<a href="https://github.com/alexanderjacks" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
			</div>
		);
	}	
}
export default SocialLinks;