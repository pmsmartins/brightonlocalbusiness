import React, { Component } from 'react';
import { initialPlaces } from '../places.js';
import { chunk } from 'lodash'
import Place from './Place.js';

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
		var cols = 4, rows = chunk(this.state.places.get(), cols)
		console.log(rows, this.state.places.get())
		return (
			<div className="container">
				<nav id="filter_bar" className="navbar">

					<div class="field">
						<input id="switchRtlExample" type="checkbox" name="switchRtlExample" class="switch is-rtl" checked="checked" />
						<label for="switchRtlExample">Switch example</label>
					</div>
					<button className="button is primary is-focused" onClick={() => this.loadPlaces('type_delivery', 'Home Delivery')}>Home Delivery</button>
					<button className="button is-link is-focused" onClick={() => this.loadPlaces('type_delivery', 'Collection')}>Collection</button>
					<button className="button is-info is-focused" onClick={() => this.loadPlaces('do_boxes', 'true')}>Do Boxes</button>
					<button className="button is-success is-focused" onClick={() => this.loadPlaces('has_online_shop', 'true')}>Has Online Shop</button>
					<button className="button is-danger is-focused" onClick={() => this.loadPlaces('category', 'Culture')}>Culture</button>
					<button className="button is-warning is-focused" onClick={() => this.loadPlaces('category', 'Coffee & Drinks')}>Coffee & Drinks</button>
					<button className="button is-focused" onClick={() => this.loadPlaces('category', 'Groceries')}>Groceries</button>
				</nav>
				{rows.map((cols) => (
					<div className="col-lg-12 columns text-center">
						{cols.map((col, index) => (
							<Place meta={col} index={index} />
						))}
					</div>
				))}
			</div>

		);
	}
}

export default PlacesGrid;