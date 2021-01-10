// Conexão mongodb
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import { mongodb as mongodbConfig} from '../../config/mongodb-config.json'
//const mongodbConfig = require('../../config/mongodb-config.json').mongodb

const prepareConnectionString = (config)  => {
	var connectionString = 'mongodb://';

	if (config.user) {
			connectionString += config.user + ':' + config.password + '@';
	}

	connectionString += config.server + '/' + config.database;

	return connectionString;
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