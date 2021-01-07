import React from 'react'
//import CustomerDashboard from './screens/CustomerDashboard'
import CustomerDetail from './screens/CustomerDetail'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render(){
		return (
			<Switch>
				<Route exact path="/" component={CustomerDetail} />
			</Switch>
		);
	}
}

export default App;
