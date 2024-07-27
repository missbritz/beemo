import client from "@/utils/apollo-client"
import BodyComponent from "../components/body";
import BackButton from "../components/back-button";
import { getAllPost } from "../queries/posts";

export default async function Page() {
    
    const getPosts = await client.query({ query: getAllPost })

    const allPosts = getPosts?.data?.posts?.data?.length && getPosts?.data?.posts?.data

    return (
        <div>
            <BackButton>{`< back`}</BackButton>
            <h2 className="text-cpink-900 font-bold text-3xl md:text-5xl capitalize pb-5">Notes</h2>
            {allPosts.length && <BodyComponent posts={allPosts} noReadMoreBtn={true}/>}
        </div>
    )
}