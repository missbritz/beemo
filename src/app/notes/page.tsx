import client from "@/utils/apollo-client"
import BodyComponent from "@/components/body";
import { getAllPost } from "@/queries/posts";

export default async function Page() {
    
    const getPosts = await client.query({ query: getAllPost })

    const allPosts = getPosts?.data?.posts?.data?.length && getPosts?.data?.posts?.data

    return (
        <div>
            <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl capitalize pb-5">Notes</h2>
            {allPosts.length && <BodyComponent posts={allPosts} noReadMoreBtn={true}/>}
        </div>
    )
}