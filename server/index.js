const { ApolloServer } = require("apollo-server");
const db = require('./connection/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const start = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    })
    
    db.once('open', () => {
        server.listen().then(({url}) => {
            console.log(`server ready at ${url}`)
        })
    })
}

start();