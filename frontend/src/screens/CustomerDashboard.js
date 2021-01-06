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
	const query = useQuery(FEED_QUERY)

	return (
				<div>
					{ query.data 
						? query.data.totalCustomersByCity.map( byCity => 
							<Card key={byCity.city} city={byCity.city} customersTotal={byCity.customers_total} /> 
							)
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
