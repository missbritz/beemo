import Emoji from "./emoji"
import Link from "next/link"
import DateFormatter from "@/utils/date-formatter"

const CategoryPosts = ({ posts }: any) => {
    return (
        posts.length ? posts.map((post:any) => {
            return (
                <div>
                    <article className="flex flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={DateFormatter(post.attributes.Published)} className="text-gray-400">{DateFormatter(post.attributes.Published)}</time>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-2xl font-semibold leading-6 text-pink-800 group-hover:text-pink-500">
                            <Link href={`/notes/${post.attributes.Category}/${post.attributes.Slug}`}>
                                <span className="absolute inset-0"></span>
                                {post.attributes.Title}
                            </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 leading-6 text-gray-400">{post.attributes.Summary}</p>
                        </div>
                        <hr className="my-8 border-b border-solid border-slate-800"/>
                    </article>
                </div>
            )
        }) : 
        <div className="py-10">
            <p className="text-center text-gray-400">stay tuned, be back in a jiffy!<Emoji symbol="☕" /></p>
        </div>
    )
}

export default CategoryPosts