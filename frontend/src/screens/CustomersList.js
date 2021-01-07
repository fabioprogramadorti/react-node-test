import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom';

const CustomersList = ({location}) => {
	const CUSTOMERS_BY_CITY_QUERY = gql`
		query ($city: String!) {
			customersByCity(city: $city) {
				_id
				first_name
				last_name
				email
				company
				gender
		}
	}
	`	
	const city = location.state.city
	const { data, loading, error } = useQuery(
		CUSTOMERS_BY_CITY_QUERY, {
		variables: {city},
	})
	
	console.log(data)
	if(loading) return <p>...Loading</p>
	if(error) return <p>{`Error ${error}`}</p>
	return (
		<div>
			<h1>Customers of {city}</h1>
			
				{data.customersByCity.map(customer =>
				<Link key={customer._id} to={{
									pathname:`/customer`,
									state: {id: customer._id}
								}}
								>
							<div>
								Nome: {customer.firs_name} {customer.last_name} <br/>
								email: {customer.email} <br />
								genero: {customer.gender} <br/>
								empresa: {customer.company} <br/>
							</div>

								</Link>
				)}
		</div>
	)
}

export default CustomersList;
