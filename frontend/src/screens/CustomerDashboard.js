import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom';
import Card from '../components/Card'
import '../styles/customer-dashboard.css'
import Loading from '../components/Loading'

const FEED_QUERY = gql`
	{
		totalCustomersByCity { 
			city
			customers_total
		}
	}
`	


const CustomerDashboard = () => {
	const {data, loading, error } = useQuery(FEED_QUERY)
	if(loading) return <Loading />
	return (
		<div>
				<h1>Customers by City</h1>
				<div className='flex-container cards'>
					{ data 
						? data.totalCustomersByCity.map((customerCity, index) => (
								<Link key={customerCity.city} to={{
									pathname:`/customers-list`,
									state: {city: customerCity.city}
								}}
								>
									<Card city={customerCity.city} customersTotal={customerCity.customers_total} />
								</Link>
								
						))
								
					: <div>
								{error &&
									<div>
										<p>{error.toString()}</p>
									</div>
								}
							</div>
					}
				</div>
		</div>

		);
}

export default CustomerDashboard;
