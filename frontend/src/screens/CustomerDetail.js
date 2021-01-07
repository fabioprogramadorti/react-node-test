import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Map from  '../components/Map'

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
	
	const { loading, data } = useQuery(FEED_QUERY)
	

	if (loading) return <p>Loading ...</p>;
	return (
		<div>
			<div>
				{data.customer.first_name}
				{data.customer.email}
				{data.customer.lat}
				{data.customer.long}
			</div>
			<Map location={{
					address: data.customer.city,
					lat: data.customer.lat,
					lng: data.customer.long
				}} zoomLevel={17} />
		</div>
	)
}

export default CustomersDetail;
