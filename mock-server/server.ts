import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import casual from 'casual';

const resolvers = {
  Query: {
    posts: (obj: any, args: any, context: any, info: any, _parent:any) => {
        console.log('objg',  obj)
        console.log('args',  args)
        console.log('context',  context)
        console.log('info',  info)
        console.log('parent', _parent)
        return
    },
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
        Label: 'LinkedIn',
        Url: 'https://linkedin.com' 
    }),
    getKitIcons: () => ({
        Label: 'Github',
        Url: 'https://github.com' 
    }),
    getPosts: () => ({
        id: casual.uuid,
        attributes: {
            Title: casual.title,
            Published: casual.date(),
            Content: casual.description,
            Category: 'my-category',
            Summary: casual.description,
            Slug: `${casual.words(3).split(' ').join('-')}`,
            MetaTitle: casual.title,
            MetaKeywords: casual.words(3).split(' ').join(', '),
            MetaDescription: casual.description,
        }
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