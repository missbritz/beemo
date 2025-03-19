import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import casual from 'casual';
import GraphQLJSON from 'graphql-type-json';
import { PostsArgs, PostAttributes, Post } from './type';

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    posts: (_: unknown, { sort, pagination, filters }: PostsArgs) => {
        try {
            // Generate a larger set of mock posts
            const posts = Array.from({ length: 20 }, (_, i) => ({
                id: casual.uuid,
                attributes: {
                    Title: casual.title,
                    Published: casual.date(),
                    Content: casual.description,
                    Category: casual.random_element(['my-category', 'tech', 'lifestyle', 'coding']),
                    Summary: casual.description,
                    Slug: `${casual.words(3).split(' ').join('-')}`,
                    MetaTitle: casual.title,
                    MetaKeywords: casual.words(3).split(' ').join(', '),
                    MetaDescription: casual.description,
                }
            }));

            let filteredPosts = [...posts];

            // Apply filters if provided
            if (filters) {
                if (filters.Slug?.eq) {
                    filteredPosts = filteredPosts.filter(post => post.attributes.Slug === filters.Slug?.eq);
                }
                if (filters.Category?.eq) {
                    filteredPosts = filteredPosts.filter(post => post.attributes.Category === filters.Category?.eq);
                }
            }

            // Apply sorting if provided
            if (sort) {
                // Handle both "field:direction" and "field" formats
                const [field, direction = 'desc'] = sort.split(':');
                const validFields = ['Title', 'Published', 'Category', 'Slug'];
                
                if (!validFields.includes(field)) {
                    throw new Error(`Invalid sort field: ${field}`);
                }

                filteredPosts.sort((a, b) => {
                    const aValue = a.attributes[field as keyof PostAttributes];
                    const bValue = b.attributes[field as keyof PostAttributes];
                    
                    if (field === 'Published') {
                        return direction === 'desc' 
                            ? new Date(bValue).getTime() - new Date(aValue).getTime()
                            : new Date(aValue).getTime() - new Date(bValue).getTime();
                    }
                    
                    // For non-date fields, use string comparison
                    return direction === 'desc'
                        ? String(bValue).localeCompare(String(aValue))
                        : String(aValue).localeCompare(String(bValue));
                });
            }

            // Apply pagination if provided
            if (pagination) {
                const { limit = 5, start = 0 } = pagination;
                filteredPosts = filteredPosts.slice(start, start + limit);
            }

            return {
                data: filteredPosts
            };
        } catch (error) {
            console.error('Error in posts resolver:', error);
            throw error;
        }
    },
    myProfile: () => ({
        data: {
            id: casual.uuid,
            attributes: {
                MainTitle: casual.title,
                MyIntro: [
                    {
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
    }),
    lab: () => ''
    }
};

const mocks = {};
  
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