import React from 'react'
import '../App.css';
import PlacesGrid from './PlacesGrid'
import Footer from './FooterPage'
import Header from './HeaderPage'
import {
	Container,
	CssBaseline
} from '@material-ui/core/'

function App() {
	return (
		<React.Fragment>
			<Container maxWidth="sm">
				<CssBaseline />
				<Header />
				<PlacesGrid />
				<Footer />
			</Container>
		</React.Fragment>
	);
}


export default App;