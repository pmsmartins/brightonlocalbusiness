import React, { Component } from 'react'
import {
	Card,
	Badge
 } from 'antd'

class Place extends Component {
	render() {
		return (
			<Card
			do_boxes={ this.props.meta.do_boxes ? "1" : "" }
			recommend= { this.props.meta.do_boxes ? "1" : "" }
			has_online_shop= { this.props.meta.do_boxes ? "1" : "" }
			collection= { this.props.meta.type_delivery.includes("Collection") ? "1" : "" }
			home_delivery= { this.props.meta.type_delivery.includes("Home Delivery") ? "1" : "" }
			voucher= { this.props.meta.voucher ? "1" : "" }
			category= { this.props.meta.category }
			>
				<Card.Img variant="top" src={ this.props.meta.pictures } />
		  		<Card.Body>
				    <Card.Title>{ this.props.meta.name }</Card.Title>
				    <Card.Subtitle className="mb-2 text-muted">{ this.props.meta.category }</Card.Subtitle>
				    <Card.Text numberOfLines={1}>{ this.props.meta.notes }</Card.Text>
				    <Card.Link href={ this.props.meta.website }>
				    	<svg class="bi bi-display" width="32px" height="32px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 010 1H5a.5.5 0 010-1h.75z"/>
								<path fill-rule="evenodd" d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" clip-rule="evenodd"/>
						</svg>
					</Card.Link>
					<br/>
					{this.props.meta.do_boxes ? <Badge variant="success">Do Boxes</Badge> : ""}
					{this.props.meta.recommend ? <Badge variant="primary">I Recommend</Badge> : ""}
					{this.props.meta.has_online_shop ? <Badge variant="warning">Has Online Shop</Badge> : ""}
					{this.props.meta.type_delivery.includes("Collection") ? <Badge variant="warning">Collection</Badge> : ""}
					{this.props.meta.type_delivery.includes("Home Delivery") ? <Badge variant="warning">Home Delivery</Badge> : ""}
				</Card.Body>
			</Card>
		);
	}
}

export default Place;