import React, { Component } from 'react';
import {initialPlaces} from '../places.js'
import Place from './Place.js';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import ButtonGroup from 'react-bootstrap/ButtonGroup'

//import DB from 'taffydb';
//TOOD use import 
var DB = require( '../../node_modules/taffydb/taffy.js' ).taffy;
require('datejs')

class PlacesGrid extends Component {
	constructor() {
		super();

		this.loadPlaces = this.loadPlaces.bind( this );
		var db = DB(initialPlaces);
		
		var places = db();
		this.state = {
			places: places,
			db: db,
		};
	};

	loadPlaces(variable,value) {
		var places = this.state.db({variable:{like:value}});

		this.setState({ places: places });
	}
	render() {
		return (
			<Container>
				<ButtonGroup>
					<div className=""><button className="btn btn-primary" onClick={() => this.loadPlaces('type_delivery','Home Delivery')}>Home Delivery</button></div>
					<div className=""><button className="btn btn-primary" onClick={() => this.loadPlaces('type_delivery','Collection')}>Collection</button></div>
					<div className=""><button className="btn btn-primary" onClick={() => this.loadPlaces('do_boxes','true')}>Do Boxes</button></div>
					<div className=""><button className="btn btn-primary" onClick={() => this.loadPlaces('has_online_shop','true')}>Has Online Shop</button></div>
					<div className=""><button className="btn btn-primary" onClick={() => this.loadPlaces('recommend','true')}>Recommend</button></div>
				</ButtonGroup>
				<div>
				<CardColumns>
					{this.state.places.map((obj, index) => <Place
						meta={obj}
						style={{
							width: '236px',
							height: `${index % 2 === 0 ? 4 * 50 : 50 }px`,
							display: 'block',
							background: 'rgba(0,0,0,0.7)'
						}}
					/>)}
				</CardColumns>
				</div>
			</Container>
			);
	}
}

export default PlacesGrid;