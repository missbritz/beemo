import { gql } from '@apollo/client'

const getPostData = gql`
    query ($slug: String!){
        posts (filters: { Slug : { eq: $slug } }){
            data {
                id
                attributes {
                    Title
                    Published
                    Content
                    Category
                    Summary
                    Slug
                    MetaTitle
                    MetaKeywords
                    MetaDescription
                }
            }
        }
    }
`

const getAllPost = gql`
    query{
        posts (sort: "Published:desc"){
            data {
                id
                attributes {
                    Title
                    Published
                    Content
                    Category
                    Summary
                    Slug
                }
            }
        }
    }
`

const getLatestFivePosts = gql`
    query{
        posts (sort: "Published:desc", pagination: { limit: 5 }){
            data {
                id
                attributes {
                    Title
                    Published
                    Content
                    Category
                    Summary
                    Slug
                }
            }
        }
    }
`

const getPostCategories = gql`
    query{
        posts {
            data {
                id
                attributes {
                    Category
                }
            }
        }
    }
`

const getAllPosts = gql`
    query{
        posts {
            data {
                id
                attributes {
                    Title
                    Published
                    Content
                    Category
                    Summary
                    Slug
                }
            }
        }
    }
`

const getPostsInCategory = gql`
    query ($category: String!){
        posts (filters: { Category : { eq: $category } }){
            data {
                id
                attributes {
                    Title
                    Published
                    Content
                    Category
                    Summary
                    Slug
                    MetaTitle
                    MetaKeywords
                    MetaDescription
                }
            }
        }
    }
`

export {
    getPostCategories,
    getPostsInCategory,
    getPostData,
    getAllPost,
    getLatestFivePosts,
    getAllPosts
}