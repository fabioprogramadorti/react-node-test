import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Map from  '../components/Map'
import '../styles/customer-detail.css'
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading'


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
	if (loading) return <Loading />;
	if (error) return <p>{`Error: ${error}`}</p>;
	return (
		<div>
			<h1>Customer Details</h1>
			<div className="col-md-6">
				<div className="label">Name:</div> <div className="email">{ data.customer.first_name } { data.customer.last_name }</div>
				<br /><div className="label">Gender:</div> <div className="phone">{ data.customer.gender }</div>
				<br /><div className="label">Email:</div> <div className="email">{ data.customer.email }</div>
				<br /><div className="label">Company:</div> <div className="email">{ data.customer.company }</div>
				<br /><div className="label">City:</div> <div className="email">{ data.customer.city }</div>
			</div>
				<div className="col-md-6">
							<Map location={{
									address: data.customer.city,
									lat: data.customer.lat,
									lng: data.customer.long
								}} zoomLevel={17} />
				</div>

			
		</div>
	)
}

export default CustomersDetail;
