import Customer from '../../../models/customer'
import getLocationByCity from './googleMaps.service'


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
		customersByCity: (_, args) =>  Customer.find({city: args.city}),

		customer: async (_, { id }) => {
			let customer = await Customer.findById(id)

			var loc = await getLocationByCity(customer.city)

			customer.lat = loc.lat
			customer.long = loc.lng

			return customer
		}
	}
}