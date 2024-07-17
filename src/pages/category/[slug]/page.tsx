import client from "@/utils/apollo-client"
import { gql } from "@apollo/client"
import BodyComponent from "@/components/body";
import { notFound } from "next/navigation";

//disable caching
export const revalidate = 0;

// export async function generateStaticParams() {

//     const posts = await client.query({
//         query: gql`
//             query{
//                 posts {
//                     data {
//                         id
//                         attributes {
//                             Category
//                         }
//                     }
//                 }
//             }
//         `
//     })

//     const allPosts = posts.data.posts.data
//     return allPosts.length && allPosts.map((post:any) => {
//        return { slug: post?.attributes?.Category }
//     })
// }

export async function getStaticProps() {
        const posts = await client.query({
        query: gql`
            query{
                posts {
                    data {
                        id
                        attributes {
                            Category
                        }
                    }
                }
            }
        `
    })

    const allPosts = posts.data.posts.data
    return allPosts.length && allPosts.map((post:any) => {
       return { slug: post?.attributes?.Category }
    })
}

export default async function Category({ params }: any) {
console.log(params)
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

    const getCurrentCategory = getPosts?.data?.posts?.data?.length ? getPosts?.data?.posts?.data?.filter((node: any) => {
        return node.attributes.Category === params.slug
    }) : [];

    return (
        <div>
            <h2 className="text-neutral-900 font-bold text-3xl capitalize">{params.slug}</h2>
            {getCurrentCategory.length && <BodyComponent posts={getCurrentCategory}/>}
        </div>
    )
}