import client from "@/utils/apollo-client"
import { gql } from "@apollo/client"
import BodyComponent from "../components/body";
import BackButton from "../components/back-button";

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
            <BackButton>{`< back`}</BackButton>
            <h2 className="text-cpink-900 font-bold text-3xl md:text-5xl capitalize pb-5">Notes</h2>
            {allPosts.length && <BodyComponent posts={allPosts} noReadMoreBtn={true}/>}
        </div>
    )
}