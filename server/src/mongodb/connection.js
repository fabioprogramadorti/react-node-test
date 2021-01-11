// Conexão mongodb
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import { mongodb as mongodbConfig} from '../../config/mongodb-config.json'
//const mongodbConfig = require('../../config/mongodb-config.json').mongodb

const prepareConnectionString = (config)  => {

	// connectionString += config.server + '/' + config.database + '?retryWrites=true&w=majority';
	// mongodb+srv://natan_2020:<password>@cluster0.f1jk7.mongodb.net/<dbname>?retryWrites=true&w=majority
	// mongodb+srv://natan_2020:natan_2020@
	// 'mongodb+srv://natan_2020:senha123@cluster0.f1jk7.mongodb.net/graphql'
	return 'mongodb+srv://natan_2020:senha123@cluster0.f1jk7.mongodb.net/graphql';
}

function dbInit () {

	const options = {
		promiseLibrary: bluebird,
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	var connectionString = prepareConnectionString(mongodbConfig, options)
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