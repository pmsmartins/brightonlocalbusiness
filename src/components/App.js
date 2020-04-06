import React, { Component } from 'react';
import '../App.css';
import $ from 'jquery';
import PlacesGrid from './PlacesGrid'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<p className='App-intro'>Brighton Rocks</p>

				<PlacesGrid layout="items" />
			</div>
		);
	}
}

export default App;