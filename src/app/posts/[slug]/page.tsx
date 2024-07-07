import RichTextBlockRenderer from "@/components/block-renderer";
import styles from '../../home.module.css'
import client from "@/utils/apollo-client"
import { gql } from "@apollo/client"

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
                        }
                    }
                }
            }
        `
    })

    const allPosts = posts.data.posts.data
    return allPosts.length && allPosts.map((post:any) => {
       // slug: post.attributes.Slug
       return { slug: post?.attributes?.Slug }
    })
}

export default async function Posts({ params }: any) {
   //const { slug } = params;

    console.log(params.slug);

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
                        }
                    }
                }
            }
        `
    })

    const getCurrentPost = getPosts?.data?.posts?.data?.length && getPosts?.data?.posts?.data?.filter((node: any) => {
        //console.log(node.attributes)
        return node.attributes.Slug === params.slug
    })

    console.log(getCurrentPost)

    return (
        //<h1>Hello</h1>
        getCurrentPost[0].attributes && (
            <article className="flex flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time datetime={getCurrentPost[0].attributes.Published} className="text-gray-500 text-sm">{getCurrentPost[0].attributes.Published}</time>
            </div>
            <div className="group relative">
                <h2 className="text-neutral-700 font-bold text-5xl my-5">
                {getCurrentPost[0].attributes.Title}
                </h2>
                <span href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{getCurrentPost[0].attributes.Category}</span>
                <hr className={`${styles.border} my-8`}/>
                <p className="text-neutral-700 max-w-prose my-3">{getCurrentPost[0].attributes.Summary}</p>
                <RichTextBlockRenderer content={getCurrentPost[0].attributes.Content} />
            </div>
            <div className="flex items-center gap-x-4 text-xs my-5">
                
            </div>
            </article>
        )
    )
}