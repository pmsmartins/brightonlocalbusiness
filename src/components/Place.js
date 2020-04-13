import React, { Component } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { 
	Card
} from 'antd'
import { Col } from 'react-flexbox-grid'
const { Meta } = Card;
class Place extends Component {
	
	render() {
		return (
			<Col   xs={6} md={3}>
				<Card

				style={{ minwidth: 240 }}
				do_boxes={ this.props.meta.do_boxes ? "1" : "" }
				recommend= { this.props.meta.do_boxes ? "1" : "" }
				has_online_shop= { this.props.meta.do_boxes ? "1" : "" }
				collection= { this.props.meta.type_delivery.includes("Collection") ? "1" : "" }
				home_delivery= { this.props.meta.type_delivery.includes("Home Delivery") ? "1" : "" }
				voucher= { this.props.meta.voucher ? "1" : "" }
				category= { this.props.meta.category }
				cover={
					<img
						alt={ this.props.meta.name }
						src={ this.props.meta.pictures }
					/>
					}
					actions={[
						<SettingOutlined key="setting" />,
						<EditOutlined key="edit" />,
						<EllipsisOutlined key="ellipsis" />,
					]}
				>
					<Meta
					title={ this.props.meta.name }
					description={ this.props.meta.notes.substr(0,100) }
					/>
				</Card>
		  </Col>
		);
	}
}

export default Place;