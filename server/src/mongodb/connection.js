// Conexão mongodb
import mongoose from 'mongoose'
import bluebird from 'bluebird'


function dbInit () {

	const options = {
		promiseLibrary: bluebird,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	var connectionString = 'mongodb+srv://natan_2020:senha123@cluster0.f1jk7.mongodb.net/graphql'
	mongoose.connect(connectionString, options)
	.then(res => {
		console.log('MongoDB connected at: ' + connectionString)
	})
	.catch(err => {
			console.log(err.message)
			console.log('An error occurred on the database connection: ' + connectionString)
		})
}

export { dbInit }