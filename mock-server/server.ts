import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import casual from 'casual';

const resolvers = {
  Query: {
    posts: () => '',
    myProfile: () => '',
  }
};

const mocks = {
    blockType: () => ({
        type: 'paragraph',
        children: [
            {
                text: casual.description,
                type: 'text' 
            }
        ]
    }),
    getSocialMedia: () => ({
        Label: casual.description,
        Url: 'text' 
    }),
    getKitIcons: () => ({
        Label: casual.word,
        Url: casual.url
    })
};
  
  async function startApolloServer() {
  
      const server = new ApolloServer({
          schema: addMocksToSchema({
              schema: makeExecutableSchema({ typeDefs, resolvers }),
              mocks,
              preserveResolvers: true,
          }),
      });
  
      const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
      console.log(`🚀 Server listening at: ${url}`);
  }

//Start Apollo Mock Server
startApolloServer();