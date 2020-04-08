import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import PlacesGrid from './PlacesGrid'
import About from './About'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<PlacesGrid layout="items" />
				<About />
				<Footer />
			</div>
		);
	}
}

export default App;