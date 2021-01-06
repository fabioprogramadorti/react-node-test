import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Card from '../components/Card'

const FEED_QUERY = gql`
	{
		totalCustomersByCity { 
			city
			customers_total
		}
	}
`

const CustomerDashboard = () => {
	const { data } = useQuery(FEED_QUERY)

	return (
				<div>
					{ data &&
						data.totalCustomersByCity.map( byCity => 
									<Card key={byCity.city} city={byCity.city} customersTotal={byCity.customers_total} /> 
							)
					}
				</div>
		);
}

export default CustomerDashboard;
