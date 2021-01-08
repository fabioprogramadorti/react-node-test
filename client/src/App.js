import React from 'react'
import CustomerDashboard from './screens/CustomerDashboard'
import CustomerDetail from './screens/CustomerDetail'
import CustomersList from './screens/CustomersList'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './components/Loading'

const App = () => {
	
	const { isAuthenticated, isLoading } = useAuth0();
	if(isLoading) return <Loading />
	return (
		<div>
			<Header />
			<Container className="flex-grow-1 mt-5">
			{
				isAuthenticated ? 
				<Switch>
					<Route exact path="/" component={CustomerDashboard} />
					<Route exact path="/customers-list/" component={CustomersList} />
					<Route exact path="/customer" component={CustomerDetail} />
				</Switch>
				: <h2>Faça login para continuar</h2>
			}
			</Container>
				
		</div>
	);
}

export default App;
