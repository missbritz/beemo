import casual from 'casual';
import GraphQLJSON from 'graphql-type-json';
import { PostsArgs, PostAttributes, LabArgs, LabAttributes } from '../type';
import generateLab from './lab';
import generatePosts from './posts';
import MyProfile from './my-profiles';

// Set a fixed seed for consistent data generation
casual.seed(123);

// Store the generated posts and labs
const posts = generatePosts();
const lab = generateLab();

export default {
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