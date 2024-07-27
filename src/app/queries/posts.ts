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

const getPostCategories = gql`
    query{
        posts {
            data {
                id
                attributes {
                    Slug
                    Category
                }
            }
        }
    }
`

export {
    getPostCategories,
    getPostData,
    getAllPost
}