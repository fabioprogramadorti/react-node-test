import React , { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom';
import '../styles/customers-list.css'

const CustomersList = ({location}) => {
	const CUSTOMERS_BY_CITY_QUERY = gql`
		query customersByCity($city: String!, $after: String, $pageSize: Int) {
			customersByCity(city: $city, after: $after, pageSize: $pageSize) {
				cursor
				hasMore
				customers{
					_id
					first_name
					last_name
				}
				
		}
	}
	`	
	const pageSize = 5
	const city = location.state.city
	const { data, loading, error, fetchMore } = useQuery(
		CUSTOMERS_BY_CITY_QUERY, {
		variables: {city, pageSize},
	})
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	if(loading) return <p>...Loading</p>
	if(error) return <p>{`Error ${error}`}</p>
	console.log(data)
	return (
		<div>
			<h1>Customers of {city}</h1>
				<div className="customer-items">
					{
						data.customersByCity &&
						data.customersByCity.customers &&
						data.customersByCity.customers.map(customer =>
							<Link key={customer._id} to={{
										pathname:`/customer`,
										state: {id: customer._id}
									}}
									>
								<div className="customer-item">
									{customer.first_name} {customer.last_name} <br/>
								</div>

							</Link>
					)}
					{
						data.customersByCity &&
						data.customersByCity.hasMore &&
						isLoadingMore ?
						<p>...Loading</p>
						:
						<button onClick={async () => {
								setIsLoadingMore(true);
								await fetchMore({
									variables: {
										city, 
										pageSize,
										after: data.customersByCity.cursor,
									},
								});
								setIsLoadingMore(false);
							}}
						> Load More </button>

					}
				</div>
		</div>
	)
}

export default CustomersList;
