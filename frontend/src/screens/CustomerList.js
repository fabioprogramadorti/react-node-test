import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from 'react-router-dom'

import Card from '../components/Card'
import CustomerDetail from './CustomerDetail'

class CusromerList extends React.Component {
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
			<Router>
				<div style={styles.container}>
					<ul>{
						this.props.customers.map(customer => 
							<li>
								<Link to={`/${customer.city}`}>
									<Card city={customer.city} customersTotal={customer.customers_total} />
								</Link>
							</li>
							)
						}</ul>

					<Switch>
						<Route exact path="/customer-detail/:id" component={CustomerDetail} />
					</Switch>
				</div>
			</Router>
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

export default CusromerList;
