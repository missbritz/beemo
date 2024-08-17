import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';

const resolvers = {
  Query: {
    posts: () => '',
    myProfile: () => '',
  }
};

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'paragraph'
};

async function startApolloServer() {

    const server = new ApolloServer({
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs, resolvers }),
            mocks
        }),
    });

    const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
    console.log(`🚀 Server listening at: ${url}`);
}

//Start Apollo Mock Server
startApolloServer();