import client from "@/utils/apollo-client"
import { gql } from "@apollo/client"
import BodyComponent from "../components/body";

export default async function Page() {
    
    const getPosts = await client.query({
        query: gql`
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
                            MetaTitle
                            MetaKeywords
                            MetaDescription
                        }
                    }
                }
            }
        `
    })

    const allPosts = getPosts?.data?.posts?.data?.length && getPosts?.data?.posts?.data

    return (
        <div>
            <h2 className="text-gray-500 font-bold text-3xl capitalize pb-5">Notes</h2>
            {allPosts.length && <BodyComponent posts={allPosts} noReadMoreBtn={true}/>}
        </div>
    )
}