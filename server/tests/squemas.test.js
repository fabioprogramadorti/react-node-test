const EasyGraphQLTester = require('easygraphql-tester')
const fs = require('fs')
const schemaCode = fs.readFileSync(__dirname + "/../src/graphql/modules/customers/schema.gql","utf8");

let tester
describe("Test Schema, Queries and Mutation", () => {
  before(() => {
    tester = new EasyGraphQLTester(schemaCode);
    //just to make sure schema comes through swiftly
    //console.log(util.inspect(tester))
  });
	it("Should pass with a valid customer query", () => {

		const customerQuery = `
		{
			customer(id:""){
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
		}`
		// First arg: true because the query is valid
		// Second arg: query to test
		tester.test(true, customerQuery);
	})
	it("Should not pass with a invalid customer query", () => {

		const customerQuery = `
		{
			customer(){
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
		}`
		// First arg: true because the query is valid
		// Second arg: query to test
		tester.test(false, customerQuery);
	})

	it("Should pass with a valid totalCustomerByCity query", () => {

		const totalCustomerByCity = `
		{
			totalCustomersByCity{
				city
				customers_total
			}
		}`
		// First arg: true because the query is valid
		// Second arg: query to test
		tester.test(true, totalCustomerByCity);
	})

	it("Should not pass with a invalid totalCustomerByCity query", () => {

		const totalCustomerByCity = `
		{
			totalCustomersByCit{
				city
				customers_total
			}
		}`
		// First arg: true because the query is valid
		// Second arg: query to test
		tester.test(false, totalCustomerByCity);
	})


	it("Should pass with a valid totalCustomerByCity query", () => {

		const customerByCity = `
		{
			customersByCity(city: "", pageSize:1, after: ""){
				cursor
				hasMore
				customers{
					_id
					first_name
				}
			}
		}`
		// First arg: true because the query is valid
		// Second arg: query to test
		tester.test(true, customerByCity);
	})
	it("Should not pass with a invalid totalCustomerByCity query", () => {

		const customerByCity = `
		{
			customersByCity(city: "", pageSize:1, after: ""){
				cursor
				hasMore
				customers
					_id
					first_name
				}
			}
		}`
		// First arg: true because the query is valid
		// Second arg: query to test
		tester.test(false, customerByCity);
	})
})