import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { graphql } from 'graphql';
import typeDefs from '../src/graphql/typeDefs'
import resolvers from '../src/graphql/resolvers'

let schema = makeExecutableSchema({ typeDefs, resolvers })

// Create a new schema with mocks
let schemaWithMocks = addMocksToSchema({ schema });


it("Get number of customers by city", async () => {
	const GET_TOTAL_CUSTOMERS_BY_CITY = `
		query {
				totalCustomersByCity{
					customers_total
					city
				}
			}
		`
	const { data } = await graphql(schemaWithMocks, GET_TOTAL_CUSTOMERS_BY_CITY)

	const { totalCustomersByCity } = data;

	expect(totalCustomersByCity).toMatchSnapshot();

});

it("Get customers by city", async () => {
	const GET_CUSTOMERS_BY_CITY = `
		query customersByCity{
			customersByCity(city:"Some City"){
				cursor
				hasMore
				customers{
					_id
					first_name
				}
			} 
		}
		`
	const { data } = await graphql(schemaWithMocks, GET_CUSTOMERS_BY_CITY)
	const { customersByCity } = data

	expect(customersByCity).toMatchSnapshot();

})

it("Get customer by ID", async () => {
	const GET_CUSTOMER = `
		query customer{
			customer(id: "1234"){
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

	const { data } = await graphql(schemaWithMocks, GET_CUSTOMER)
	const { customer } = data
	
	expect(customer).toMatchSnapshot();

});




