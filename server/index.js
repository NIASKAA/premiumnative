const { ApolloServer } = require("apollo-server");
const db = require('./connection/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 4000

const start = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    })
    
    db.once('open', () => {
        server.listen(PORT, () => {
            console.log(`listening at ${PORT}`)
        })
    })
}

start();