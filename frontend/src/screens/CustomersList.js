import React from 'react'
import { useQuery, gql } from '@apollo/client'

const FEED_QUERY = gql`
	{
		customersByCity(city:"Cimarron, WA") {
			_id
			first_name
			last_name
			email
			company
			gender
  }
}
`	

const CustomersList = (props) => {
	const query = useQuery(FEED_QUERY)

	return (
		<div>

				{query.data.customersByCity.map(customer =>
					<div>
						Nome: {customer.firs_name} {customer.last_name} <br/>
						email: {customer.email} <br />
						genero: {customer.gender} <br/>
						empresa: {customer.company} <br/>
					</div>
				)}
						
						
		</div>
	)
}

export default CustomersList;
