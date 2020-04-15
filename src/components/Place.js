import React, { Component } from 'react';
import {
	figure
} from 'bulma';

class Place extends Component {
	render() {
		return (
			<div className="column is-3" key={this.props.name}>
				<div className="card" 
				do_boxes={ this.props.meta.do_boxes ? "1" : "" }
				recommend= { this.props.meta.do_boxes ? "1" : "" }
				has_online_shop= { this.props.meta.do_boxes ? "1" : "" }
				collection= { this.props.meta.type_delivery.includes("Collection") ? "1" : "" }
				home_delivery= { this.props.meta.type_delivery.includes("Home Delivery") ? "1" : "" }
				voucher= { this.props.meta.voucher ? "1" : "" }
				>
					<div className="card-image">
						<figure className="image is-3by3">
							<img
								src={this.props.meta.pictures}
								alt={this.props.meta.name}
							/>
						</figure>
					</div>
					<div className="card-content">
						<div className="media">
							<div className="media-left">
								<figure className="image is-48x48">
									<img
										src={this.props.meta.pictures}
										alt={this.props.meta.name}
									/>
								</figure>
							</div>
							<div className="media-content">
								<p className="title is-4">{this.props.meta.name}</p>
								<p className="subtitle is-6">{this.props.meta.categories}</p>
							</div>
						</div>

						<div className="content">
							{this.props.meta.notes}
						</div>
						{this.props.meta.category.split(',').map((cat, index) => (
							<span class="tag is-light cstm-tag-category">{cat}</span>
						))}
						
					</div>
				</div></div >
		);
	}
}

export default Place;