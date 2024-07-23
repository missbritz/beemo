import styles from '../../home.module.css'
import client from "../../../utils/apollo-client";
import { gql } from "@apollo/client";
import BodyComponent from '@/app/components/body';

async function PostNotFound({ children } : any) {

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

  return (
    <div className="px-8 flex flex-col justify-center items-center">
      <h2 className="text-neutral-900 font-bold text-3xl">not found</h2>
      <p className="text-neutral-600 max-w-prose my-2 text-sm">Oops! Looks like you took a wrong turn.</p>
      <hr className={`${styles.border} my-8`}/>
      <BodyComponent posts={getPosts}/>
    </div>
  )
}

export default PostNotFound    