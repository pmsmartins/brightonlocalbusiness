import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'

class Footer extends Component {
	constructor() {
		super();
	};

	render() {
		return (
			<Container fluid>
				<h1>Fluid jumbotron</h1>
				<p>
				This is a modified jumbotron that occupies the entire horizontal space of
				its parent.
				</p>
			</Container>
		);
	}
}

export default Footer;