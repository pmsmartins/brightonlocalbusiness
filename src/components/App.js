import React from 'react'
import '../App.css';
import PlacesGrid from './PlacesGrid'
import Footer from './FooterPage'
import Header from './HeaderPage'

function App() {
	return (
		<div class="is-fullhd">
			<Header />
			<PlacesGrid />
			<Footer />
		</div>
	);
}


export default App;