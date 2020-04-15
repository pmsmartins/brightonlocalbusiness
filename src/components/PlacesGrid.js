import React, { Component } from 'react';
import { initialPlaces } from '../places.js';
import Place from './Place.js';
import {
	Button,
	GridList
} from '@material-ui/core/';


//import DB from 'taffydb';
//TOOD use import 
var DB = require('../../node_modules/taffydb/taffy.js').taffy;

class PlacesGrid extends Component {
	constructor() {
		super();
		this.loadPlaces = this.loadPlaces.bind(this);
		var db = DB(initialPlaces);

		var places = db();
		this.state = {
			places: places,
			db: db,
		};
	};

	loadPlaces(variable, value) {
		var places = this.state.db({ [variable]: { like: value } });

		this.setState({ places: places });
	}

	render() {
		return (
			<div class="place_grid">
				<Button type="primary" disabled onClick={() => this.loadPlaces('type_delivery', 'Home Delivery')}>Home Delivery</Button>
				<Button type="primary" disabled onClick={() => this.loadPlaces('type_delivery', 'Collection')}>Collection</Button>
				<Button type="primary" disabled onClick={() => this.loadPlaces('do_boxes', 'true')}>Do Boxes</Button>
				<Button type="primary" disabled onClick={() => this.loadPlaces('has_online_shop', 'true')}>Has Online Shop</Button>
				<Button type="primary" disabled onClick={() => this.loadPlaces('category', 'Culture')}>Culture</Button>
				<Button type="primary" disabled onClick={() => this.loadPlaces('category', 'Coffee & Drinks')}>Coffee & Drinks</Button>
				<Button type="primary" disabled onClick={() => this.loadPlaces('category', 'Groceries')}>Groceries</Button>
				<GridList>
					{this.state.places.map((obj, index) => <Place
						meta={obj}
						style={{
							width: '236px',
							height: `${index % 2 === 0 ? 4 * 50 : 50}px`,
							display: 'block',
							background: 'rgba(0,0,0,0.7)'
						}}
					/>)}
				</GridList>
			</div>
		);
	}
}

export default PlacesGrid;