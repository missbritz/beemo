import client from "@/utils/apollo-client"
import { gql } from "@apollo/client"
import CategoryPosts from "@/app/components/category-posts";
import { notFound } from "next/navigation";
import BackButton from "@/app/components/back-button";

export async function generateStaticParams() {

    const posts = await client.query({
        query: gql`
            query{
                posts {
                    data {
                        id
                        attributes {
                            Category,
                            Slug
                        }
                    }
                }
            }
        `
    })

    const allPosts = posts.data.posts.data
    return allPosts.length && allPosts.map((post:any) => {
       return { category: post?.attributes?.Category, slug: post?.attributes?.Slug }
    })
}

export default async function Category({ params }: any) {

    if (!params?.category) notFound();
    
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

    const getCurrentCategory = getPosts?.data?.posts?.data?.length ? getPosts?.data?.posts?.data?.filter((node: any) => {
        return node.attributes.Category === params.category
    }) : [];

    return (
        <div>
            <BackButton>{`< back`}</BackButton>
            <h2 className="text-cpink-900 font-bold text-3xl md:text-5xl capitalize pb-5">{params.category}</h2>
            {getCurrentCategory.length && <CategoryPosts posts={getCurrentCategory}/>}
        </div>
    )
}