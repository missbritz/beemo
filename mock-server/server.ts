import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './schema';
import casual from 'casual';
import GraphQLJSON from 'graphql-type-json';
import { PostsArgs, PostAttributes, Post, LabItem, LabArgs, LabAttributes } from './type';
import generateLab from './resolvers/lab';
import generatePosts from './resolvers/posts';
import MyProfile from './resolvers/my-profiles';

// Set a fixed seed for consistent data generation
casual.seed(123);

// Store the generated posts and labs
const posts = generatePosts();
const lab = generateLab();

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
                        const aDate = typeof aValue === 'string' ? new Date(aValue) : new Date();
                        const bDate = typeof bValue === 'string' ? new Date(bValue) : new Date();
                        return direction === 'desc'
                            ? bDate.getTime() - aDate.getTime()
                            : aDate.getTime() - bDate.getTime();
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
    myProfile: () => MyProfile(),
    labs: (_: unknown, { sort }: LabArgs) => {
        try {
            let sortedLab = [...lab];

            // Apply sorting if provided
            if (sort) {
                const [field, direction = 'desc'] = sort.split(':');
                sortedLab.sort((a, b) => {
                    const aValue = a.attributes[field as keyof LabAttributes];
                    const bValue = b.attributes[field as keyof LabAttributes];
                    
                    if (typeof aValue === 'string') {
                        return direction === 'desc'
                            ? String(bValue).localeCompare(String(aValue))
                            : String(aValue).localeCompare(String(bValue));
                    }
                    
                    // For numeric values
                    return direction === 'desc'
                        ? Number(bValue) - Number(aValue)
                        : Number(aValue) - Number(bValue);
                });
            }

            return {
                data: sortedLab
            };
        } catch (error) {
            console.error('Error in lab resolver:', error);
            return {
                data: []
            };
        }
    }
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