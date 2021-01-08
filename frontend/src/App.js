import React from 'react'
import CustomerDashboard from './screens/CustomerDashboard'
import CustomerDetail from './screens/CustomerDetail'
import CustomersList from './screens/CustomersList'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render(){
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={CustomerDashboard} />
					<Route exact path="/customers-list/" component={CustomersList} />
					<Route exact path="/customer" component={CustomerDetail} />
				</Switch>
			</div>
		);
	}
}

export default App;
