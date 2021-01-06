import React from 'react'
import CustomerDashboard from './screens/CustomerDashboard'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
	render(){
		return (
			<Switch>
				<Route exact path="/" component={CustomerDashboard} />
			</Switch>
		);
	}
}

export default App;
