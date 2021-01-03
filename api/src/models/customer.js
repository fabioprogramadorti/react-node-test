import mongoose from 'mongoose'

const CustomerSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	company: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
})
export default mongoose.model('Customer', CustomerSchema)