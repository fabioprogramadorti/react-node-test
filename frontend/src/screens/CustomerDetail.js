import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Map from  '../components/Map'

const CustomersDetail = ({location}) => {
	const USER_QUERY = gql`
		query customer($id: ID!){
			customer(id: $id){
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
	const userId = location.state.id

	const { loading, data, error} = useQuery(USER_QUERY, {
		variables: {id: userId}
	})
	

	if (loading) return <p>Loading ...</p>;
	if (error) return <p>{`Error: ${error}`}</p>;
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
