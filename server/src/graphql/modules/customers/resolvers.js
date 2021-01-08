import Customer from '../../../models/customer'
import getLocationByCity from './googleMaps.service'
import paginatedResults from './utils'

export default {
	Query: {
		totalCustomersByCity: async (_, args) => {

			// group customers by city and count them
			const allCustomers = await Customer.aggregate([
				{
					$group: {
						_id: '$city',
						customers_total: { $sum: 1 }
					}
				}
			])

			// change object key _id by city
			return allCustomers.map(customer => {
				customer.city = customer._id
				delete customer._id
				return customer
			})
		},
		customersByCity: async(_, {city, pageSize=20, after}) => {
			const customersByCity = await Customer.find({city: city})
			const results = customersByCity.map(customer => {
				customer._id = customer._id.toString()
				return customer
			})
			const customers = paginatedResults({
				after,
				pageSize,
				results
			})
			
			return {
				customers,
				cursor: customers.length ? customers[customers.length - 1].id : null,
				hasMore: customers.length 
				? customers[customers.length - 1].id !== 
					customersByCity[customersByCity.length - 1].id
				: false
			}
		},
		customer: async (_, { id }) => {
			let customer = await Customer.findById(id)
			var loc = await getLocationByCity(customer.city)

			customer.lat = loc.lat
			customer.long = loc.lng

			return customer
		}
	}
}