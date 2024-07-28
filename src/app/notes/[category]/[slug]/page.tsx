import client from "@/utils/apollo-client"
import { notFound } from "next/navigation";
import { getPostData, getPostCategories } from '@/queries/posts'
import SinglePost from "@/components/single-post";
import BackButton from "@/components/back-button";

export async function generateStaticParams() {

    const posts = await client.query({
        query: getPostCategories
    })

    const allPosts = posts.data.posts.data
    return allPosts.length ? allPosts.map((post:any) => {
       return { 
        slug: post?.attributes?.Slug,
        category: post?.attributes?.Category
       }
    }) : []
}

export async function generateMetadata({ params }: any) {
    return {
      title: `Britta Oblan - ${params.category}`,
    }
}

export default async function Page({ params }: any) {

    if (!params?.slug) notFound();

    const getPosts = await client.query({
        query: getPostData,
        variables: {
            slug: params.slug
        }
    })

    const getCurrentPost = getPosts.data.posts.data
    console.log(getCurrentPost)

    return (
        <>
            <BackButton>{`< back`}</BackButton>
            {getCurrentPost[0].attributes && <SinglePost post={getCurrentPost[0]}/>}
        </>
    )
}