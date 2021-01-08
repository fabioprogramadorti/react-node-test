import React from 'react'
import CustomerDashboard from './screens/CustomerDashboard'
import CustomerDetail from './screens/CustomerDetail'
import CustomersList from './screens/CustomersList'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import { Container } from "reactstrap";

class App extends React.Component {
	render(){
		return (
			<div>
				<Header />
				 <Container className="flex-grow-1 mt-5">
					<Switch>
						<Route exact path="/" component={CustomerDashboard} />
						<Route exact path="/customers-list/" component={CustomersList} />
						<Route exact path="/customer" component={CustomerDetail} />
					</Switch>
				 </Container>
			</div>
		);
	}
}

export default App;
