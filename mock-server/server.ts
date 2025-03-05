import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import casual from 'casual';
import GraphQLJSON from 'graphql-type-json';

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    posts: () => '',
    myProfile: () => ({
        data: {
            id: casual.uuid,
            attributes: {
                MainTitle: casual.title,
                MyIntro: [{
                    type: "paragraph",
                    children: [
                        { type: "text", text: "Hello, I'm a software developer!" },
                        { type: "text", text: "I specialize in frontend development." }
                    ]
                    },
                    {
                        type: "paragraph",
                        children: [
                            { type: "text", text: "Another test paragraph" },
                            { type: "text", text: "I specialize in frontend development." }
                        ]
                    }
                ],
                SocialMediaLinks: [
                    { Label: "LinkedIn", Url: "https://linkedin.com" },
                    { Label: "Twitter", Url: "https://twitter.com" }
                ],
                KitIcons: [
                    { Label: "GitHub", Url: "https://github.com" },
                    { Label: "React", Url: "https://reactjs.org" }
                ]
            }
        }
    })
  }
};

const mocks = {
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