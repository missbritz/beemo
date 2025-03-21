import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import resolvers from './resolvers';

const mocks = {};
  
async function startApolloServer() {

    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs, resolvers }),
            mocks,
            preserveResolvers: true,
        }),
    });

    const { url } = await startStandaloneServer(server, { 
        listen: { port: 4000 },
    });
    console.log(`🚀 Server listening at: ${url}`);
}

//Start Apollo Mock Server
startApolloServer().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});