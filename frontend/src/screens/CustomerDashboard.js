import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Card from '../components/Card'
import { Route, Link } from 'react-router-dom';
import CustomersList from './CustomersList';

const FEED_QUERY = gql`
	{
		totalCustomersByCity { 
			city
			customers_total
		}
	}
`	


const CustomerDashboard = () => {
	const query = useQuery(FEED_QUERY)
	
	return (
				<div>
					{ query.data 
						? query.data.totalCustomersByCity.map((customerCity, index) => (
										<div>
											<Link key={customerCity.city} to={{
												pathname:`/customers-list/${customerCity.city}`,
												city: customerCity.city
											}}
											>
												<Card city={customerCity.city} customersTotal={customerCity.customers_total} />
											</Link>
											<Route key={index} path='/customers-list/:city' component={CustomersList} />
										</div>
									))
										
						: <div>
								{query.error &&
									<div>
										<p>{query.error.toString()}</p>
									</div>
								}
							</div>

					}
						

				</div>
		);
}

export default CustomerDashboard;
