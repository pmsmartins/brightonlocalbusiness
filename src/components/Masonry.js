import React, { Component } from 'react';
import MasonryLayout from 'react-masonry-layout'
import Event from './Event'
import {initialEvents} from '../events.js'

class Masonry extends Component {

	static defaultProps = {
		maxCount: 5,
		perPage: 20
	}

	state = {
		count: 0,
		isLoading: false,
		items: initialEvents
	}


	getItems() {
		if (this.state.count >= this.props.maxCount) return
			this.setState(Object.assign(
				{},
				this.state,
				{ isLoading: true }
				), () => {
				setTimeout(() => {
					this.setState(Object.assign(
						{},
						this.state,
						{
							isLoading: false,
							items: this.state.items.concat(
								Array(this.defaultsProps.perPage).fill()
								)
						}
						))
				})
			})
	}

	render() {
		return
			// eslint-disable-next-line
			<MasonryLayout
			id="1234"
			infiniteScroll={this.getItems}
			infiniteScrollLoading={this.state.isLoading} 
			>

			{this.state.items.map((obj, index) => <Event
				key={index}
				meta={obj}
				style={{
					width: '236px',
					height: `${index % 2 === 0 ? 4 * 50 : 50 }px`,
					display: 'block',
					background: 'rgba(0,0,0,0)'
				}}
				/>)}

			</MasonryLayout>
	}
}


export default Masonry;