import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import casual from 'casual';
import GraphQLJSON from 'graphql-type-json';
import { PostsArgs, PostAttributes, Post } from './type';

// Set a fixed seed for consistent data generation
casual.seed(123);

// Pre-generate posts to ensure consistency
const generatePosts = () => {
    const posts = Array.from({ length: 20 }, (_, i) => {
        const title = casual.title;
        const category = casual.random_element(['my-category', 'tech', 'lifestyle', 'coding']);
        const slug = `${title.toLowerCase().replace(/\s+/g, '-')}-${i}`;
        return {
            id: `post-${i + 1}`,
            attributes: {
                Title: title,
                Published: casual.date(),
                Content: [
                    {
                        type: 'paragraph',
                        children: [
                            { type: 'text', text: casual.description }
                        ]
                    },
                    {
                        type: 'paragraph',
                        children: [
                            { type: 'text', text: casual.description }
                        ]
                    }
                ],
                Category: category,
                Summary: casual.description,
                Slug: slug,
                MetaTitle: title,
                MetaKeywords: casual.words(3).split(' ').join(', '),
                MetaDescription: casual.description,
            }
        };
    });
    return posts;
};

// Store the generated posts
const posts = generatePosts();

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    posts: (_: unknown, { sort, pagination, filters }: PostsArgs) => {
        try {
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
                const [field, direction = 'desc'] = sort.split(':');
                filteredPosts.sort((a, b) => {
                    const aValue = a.attributes[field as keyof PostAttributes];
                    const bValue = b.attributes[field as keyof PostAttributes];
                    
                    if (field === 'Published') {
                        return direction === 'desc' 
                            ? new Date(bValue).getTime() - new Date(aValue).getTime()
                            : new Date(aValue).getTime() - new Date(bValue).getTime();
                    }
                    
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

            // Ensure we always return an array, even if empty
            return {
                data: filteredPosts || []
            };
        } catch (error) {
            console.error('Error in posts resolver:', error);
            // Return empty data instead of throwing
            return {
                data: []
            };
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
  
      const { url } = await startStandaloneServer(server, { 
          listen: { port: 4000 },
          context: async ({ req, res }) => {
              // Add CORS headers
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
              res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
              
              // Add headers to match Strapi's behavior
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
              res.setHeader('Pragma', 'no-cache');
              res.setHeader('Expires', '0');
              
              // Handle preflight requests
              if (req.method === 'OPTIONS') {
                  res.statusCode = 204;
                  res.end();
              }
              
              return {};
          }
      });
      console.log(`🚀 Server listening at: ${url}`);
  }

//Start Apollo Mock Server
startApolloServer().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});