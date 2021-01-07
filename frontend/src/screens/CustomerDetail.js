import React from 'react'
import { useQuery, gql } from '@apollo/client'


const CustomersDetail = (props) => {
	const FEED_QUERY = gql`
		{
			customer(id:"5ff227d0dbc624f52a1f0262"){
				_id
				first_name
				last_name
				email
				gender
				company
				city
				title
				lat
				long
			}
		}
	`	
	
	const query = useQuery(FEED_QUERY)
	const customer = query.data.customer
	return (
		<div>
			{customer.first_name}
			{customer.email}
			{customer.lat}
			{customer.long}
		</div>
	)
}

export default CustomersDetail;
