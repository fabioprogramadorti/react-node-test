import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Map from  '../components/Map'
import '../styles/customer-detail.css'
import { Redirect } from 'react-router-dom';

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
	const userId = location.state ? location.state.id : ''

	const { loading, data, error} = useQuery(USER_QUERY, {
		variables: {id: userId}
	})
	
	if(!userId) return <Redirect to="/" />
	if (loading) return <p>Loading ...</p>;
	if (error) return <p>{`Error: ${error}`}</p>;
	return (
		<div>
			<h1>Customer Details</h1>
				<table>
					<tr>
						<td colspan="1">
							<div class="name">{ data.customer.first_name } { data.customer.last_name }</div>
						</td>
					</tr>
					<tr>
						<td class="details-td">
							<div class="label">Gender:</div> <div class="phone">{ data.customer.gender }</div>
							<br /><div class="label">Email:</div> <div class="email">{ data.customer.email }</div>
							<br /><div class="label">Company:</div> <div class="email">{ data.customer.company }</div>
							<br /><div class="label">City:</div> <div class="email">{ data.customer.city }</div>
						</td>
					</tr>
					
				</table>

			<h2>Location</h2>
			<Map location={{
					address: data.customer.city,
					lat: data.customer.lat,
					lng: data.customer.long
				}} zoomLevel={17} />
		</div>
	)
}

export default CustomersDetail;
