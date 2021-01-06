import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from 'react-router-dom'

import Card from '../components/Card'

class CusromerList extends React.Component {

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
						<Route exact path="customer-list/:city" component={CusromerList} />
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
