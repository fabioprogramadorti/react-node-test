import { Component } from 'react'

import Card from './components/Card'
class App extends Component {

	state = {
		customers: [
			{
				city: "Warner, NH",
				customers_total: 20
			},
			{
				city: "Warner, NH",
				customers_total: 20
			},
			{
				city: "Warner, NH",
				customers_total: 20
			},
		]
	}

	render(){
		return (
			<div style={styles.container}>
				<ul>{
					this.state.customers.map(customer => 
						<li>
							<Card city={customer.city} customersTotal={customer.customers_total} />
						</li>
						)
					}</ul>
			</div>
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
