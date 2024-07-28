import client from "@/utils/apollo-client"
import CategoryPosts from "@/components/category-posts";
import { notFound } from "next/navigation";
import BackButton from "@/components/back-button";
import { getPostCategories, getPostsInCategory } from "@/queries/posts";

export async function generateStaticParams() {

    const posts = await client.query({
        query: getPostCategories
    })

    const allPosts = posts.data.posts.data
    return allPosts.length && allPosts.map((post:any) => {
       return { category: post?.attributes?.Category, slug: post?.attributes?.Slug }
    })
}

export async function generateMetadata({ params }: any) {
    return {
      title: `Britta Oblan - Notes - ${params.category}`,
    }
}

export default async function Category({ params }: any) {

    if (!params?.category) notFound();
    
    const getPosts = await client.query({
        query: getPostsInCategory,
        variables: {
            category: params.category
        }
    })

    const getCurrentCategory = getPosts.data.posts.data

    return (
        <div>
            <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl capitalize pb-5">{params.category}</h2>
            {getCurrentCategory.length && <CategoryPosts posts={getCurrentCategory}/>}
        </div>
    )
}