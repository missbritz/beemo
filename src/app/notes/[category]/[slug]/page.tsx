import RichTextBlockRenderer from "@/app/components/block-renderer";
import client from "@/utils/apollo-client"
import { notFound } from "next/navigation";
import Link from "next/link";
import DateFormatter from "@/utils/date-formatter";
import BackButton from "@/app/components/back-button";
import { getPostData, getPostCategories } from '@/app/queries/posts'

export async function generateStaticParams({params}: any) {

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

    return (
        <>
            <BackButton>{`< back`}</BackButton>
            {getCurrentPost[0].attributes && (
                <article className="flex flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={DateFormatter(getCurrentPost[0].attributes.Published)} className="text-gray-400 text-sm">{DateFormatter(getCurrentPost[0].attributes.Published)}</time>
                    </div>
                    <div className="group relative w-full">
                        <h2 className="text-cpink-900 font-bold text-3xl md:text-5xl my-5">
                        {getCurrentPost[0].attributes.Title}
                        </h2>
                        <Link href={`/notes/${getCurrentPost[0].attributes.Category}`} className="relative z-10 rounded-full bg-slate-900 px-3 py-1.5 font-medium text-gray-600 hover:text-pink-500 text-sm">{getCurrentPost[0].attributes.Category}</Link>
                        <hr className="my-8 border-b border-solid border-slate-800"/>
                        <p className="text-gray-400 my-3">{getCurrentPost[0].attributes.Summary}</p>
                        {getCurrentPost[0].attributes.Content && <RichTextBlockRenderer content={getCurrentPost[0].attributes.Content} />}
                    </div>
                </article>
            )}
        </>
    )
}