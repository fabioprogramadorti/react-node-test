import React , { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link, Redirect } from 'react-router-dom';
import '../styles/customers-list.css'
import Loading from '../components/Loading'

const CustomersList = ({location}) => {
	
	const GET_CUSTOMERS_BY_CITY = gql`
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
	const city = location.state ? location.state.city : ''
	const { data, loading, error, fetchMore } = useQuery(
		GET_CUSTOMERS_BY_CITY, {
			variables: {city, pageSize},
		})
		const [isLoadingMore, setIsLoadingMore] = useState(false);


	if(!city) return <Redirect to="/"></Redirect>
	if(loading) return <Loading />
	if(error) return <p>{`Error ${error}`}</p>
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
						<Loading />
						:
						<button onClick={ async () => {
								const { cursor } = data.customersByCity
								setIsLoadingMore(true);
								await fetchMore({
									variables: {
										city, 
										pageSize,
										after: cursor,
									},
									updateQuery: (prev, { fetchMoreResult }) => {
										fetchMoreResult.customersByCity.customers = [
											...prev.customersByCity.customers,
											...fetchMoreResult.customersByCity.customers
										]
										return fetchMoreResult
									}
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
