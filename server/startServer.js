import { ApolloServer } from 'apollo-server'
import { dbInit } from './src/mongodb/connection'

function startServer({ typeDefs, resolvers }){

	dbInit()

	const server = new ApolloServer({ typeDefs, resolvers })
	server.listen().then(({ url }) => 
	console.log(`Server started at ${url}`))
}

export default startServer