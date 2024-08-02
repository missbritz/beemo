import client from "@/utils/apollo-client"
import { notFound } from "next/navigation";
import { getPostData, getPostCategories } from '@/queries/posts'
import SinglePost from "@/components/single-post";

async function getEachPost (slug: string) {
    const getPosts = await client.query({
        query: getPostData,
        variables: {
            slug: slug
        }
    })

    return getPosts.data.posts.data || []

}

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

    const getCurrentPost = await getEachPost(params.slug)

    return {
        title: `Britta Oblan - ${getCurrentPost[0].attributes.MetaTitle}`,
        keywords: getCurrentPost[0].attributes.MetaTitle,
        description: getCurrentPost[0].attributes.MetaTitle,
      }
}

export default async function Page({ params }: any) {

    if (!params?.slug) notFound();
    
    const getCurrentPost = await getEachPost(params.slug)

    return (
        <>
            {getCurrentPost[0].attributes && <SinglePost post={getCurrentPost[0]}/>}
        </>
    )
}