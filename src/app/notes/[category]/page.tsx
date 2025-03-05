import client from "@/utils/apollo-client"
import CategoryPosts from "@/components/category-posts";
import { getPostCategories, getPostsInCategory } from "@/queries/posts";

export async function generateStaticParams() {

    const posts = await client.query({
        query: getPostCategories
    })
    const allPosts = posts.data.posts.data
    return allPosts.length && allPosts.map((post:any) => {

       return { category: post?.attributes?.Category }
    })
}

export async function generateMetadata({ params }: any) {
    return {
      title: `Britta Oblan - Notes - ${params.category}`,
    }
}

export default async function Category({ params }: any) {

    if (!params?.category) console.log('not found')
    
    const getPosts = await client.query({
        query: getPostsInCategory,
        variables: {
            category: params.category
        }
    })

   // const getCurrentCategory = getPosts.data.posts.data

    return (
        console.log(params)
    )
}