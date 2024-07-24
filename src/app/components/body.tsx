import DateFormatter from "@/utils/date-formatter"
import Emoji from "./emoji"
import Link from "next/link"

const BodyComponent = ({ posts }: any) => {

    const AllPosts = () => {
        return posts.length ? posts.map((post:any) => {
            return (
                <div className="py-10">
                    <article className="flex flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={DateFormatter(post.attributes.Published)} className="text-gray-500">{DateFormatter(post.attributes.Published)}</time>
                            <Link href={`/notes/${post.attributes.Category}`} className="relative z-10 rounded-full bg-slate-900 px-3 py-1.5 font-medium text-gray-600 hover:text-pink-500">{post.attributes.Category}</Link>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-2xl font-semibold leading-6  text-pink-800 group-hover:text-pink-500">
                            <Link href={`/notes/${post.attributes.Category}/${post.attributes.Slug}`}>
                                <span className="absolute inset-0"></span>
                                {post.attributes.Title}
                            </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 leading-6 text-gray-500">{post.attributes.Summary}</p>
                        </div>
                    </article>
                </div>
            )
        }) : 
        <div className="py-10">
            <p className="text-center text-gray-500">stay tuned, be back in a jiffy!<Emoji symbol="☕" /></p>
        </div>
    }

    const GoToNotes = () => {
        return (
            <Link href="/notes" className="my-4 relative inline-flex items-center justify-center rounded-md p-0.5 mb-2 me-2 overflow-hidden bg-cpink-900 group-hover:bg-opacity-0">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cblue-800 rounded-md group-hover:bg-opacity-0">
                    Read more
                </span>
            </Link>
        )
    }


    return (
        <>
            <AllPosts />
            <GoToNotes/>
        </>
    )
}

export default BodyComponent