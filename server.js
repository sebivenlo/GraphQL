const {GraphQLServer} = require('graphql-yoga');
const constants = require('./resolvers/resolvers');
const resolvers = constants.resolvers;

// Start server
const server = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));

