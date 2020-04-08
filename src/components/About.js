import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

class About extends Component {
	constructor() {
		super();
	};

	render() {
		return (
			
			<Jumbotron fluid>
				<Container>
					<h1>Fluid jumbotron</h1>
					<p>
					This is a modified jumbotron that occupies the entire horizontal space of
					its parent.
					</p>
				</Container>
			</Jumbotron>
		);
	}
}

export default About;