import React, { Component } from 'react';
import '../App.css';
import PlacesGrid from './PlacesGrid'
import Footer from './FooterPage'
import Header from './HeaderPage'
import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

class App extends Component {
	render() {
		return (
			<Layout>
				<Header />
				<Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      				<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<PlacesGrid layout="items" />
				</Content>
				<Footer />
			</Layout>
		);
	}
}

export default App;