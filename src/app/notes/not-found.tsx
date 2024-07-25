import client from "../../utils/apollo-client";
import { gql } from "@apollo/client";
import BackButton from "../components/back-button";

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
      <BackButton>{`< back`}</BackButton>
      <h2 className="text-cpink-900 font-bold text-3xl md:text-5xl">not found</h2>
      <p className="text-gray-400 max-w-prose my-2 text-sm">Oops! Looks like you took a wrong turn.</p>
      <hr className="my-8 border-b border-solid border-slate-800"/>
    </div>
  )
}

export default PostNotFound    