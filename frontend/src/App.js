import React from 'react'


import CustomerDashboard from './screens/CustomerDashboard'

class App extends React.Component {

	state = {
		customers: [
			{
				city: "New York, NY",
				customers_total: 20
			},
			{
				city: "Warner, NH",
				customers_total: 20
			},
			{
				city: "Los Angeles, CA",
				customers_total: 20
			},
		]
	}

	render(){
		return (
			<CustomerDashboard customers={this.state.customers} />
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
}

export default App;
