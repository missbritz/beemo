import RichTextBlockRenderer from "@/app/components/block-renderer";
import styles from "@/app/home.module.css"
import client from "@/utils/apollo-client"
import { gql } from "@apollo/client"
import { notFound } from "next/navigation";
import Link from "next/link";

//disable caching
export const revalidate = 0;


export async function generateStaticParams() {

    const posts = await client.query({
        query: gql`
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
    })

    const allPosts = posts.data.posts.data
    return allPosts.length ? allPosts.map((post:any) => {
       return { slug: post?.attributes?.Slug, category: post?.attributes?.Category }
    }) : []
}

export default async function Page({ params }: any) {

    if (!params?.slug) notFound();

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

    const getCurrentPost = getPosts?.data?.posts?.data?.length ? getPosts?.data?.posts?.data?.filter((node: any) => {
        return node.attributes.Slug === params.slug
    }) : []

    return (
        getCurrentPost[0].attributes && (
            <article className="flex flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={getCurrentPost[0].attributes.Published} className="text-gray-500 text-sm">{getCurrentPost[0].attributes.Published}</time>
            </div>
            <div className="group relative w-full">
                <h2 className="text-neutral-700 font-bold text-5xl my-5">
                {getCurrentPost[0].attributes.Title}
                </h2>
                <Link href={`/notes/${getCurrentPost[0].attributes.Category}`} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{getCurrentPost[0].attributes.Category}</Link>
                <hr className={`${styles.border} my-8`}/>
                <p className="text-neutral-700 my-3">{getCurrentPost[0].attributes.Summary}</p>
                {/* <RichTextBlockRenderer content={getCurrentPost[0].attributes.Content} /> */}
            </div>
            <div className="flex items-center gap-x-4 text-xs my-5">
                
            </div>
            </article>
        )
    )
}