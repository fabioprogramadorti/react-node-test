import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import bluebird from 'bluebird'

const connectionUri = 'mongodb://localhost:27017/graphql'
const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		promiseLibrary: bluebird
	}
function startServer({ typeDefs, resolvers }){

	mongoose.connect(connectionUri, options)
		.then(res => {
			console.log('MongoDB connected at: ' + connectionUri)
		})
		.catch(err => {
			console.log(err)
		})

	const server = new ApolloServer({ typeDefs, resolvers })
	server.listen().then(({ url }) => 
	console.log(`Server started at ${url}`))
}

export default startServer