import DateFormatter from "@/utils/date-formatter"
import Emoji from "./emoji"
import Link from "next/link"
import Chips from "./chips";
import "../app/globals.css";

const BodyComponent = ({ posts, noReadMoreBtn }: any) => {

    const AllPosts = () => {
        return posts.length ? posts.map((post:any) => {
            return (
                <div className="first:pt-0 pb-10 pt-5">
                    <article className="flex flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={DateFormatter(post.attributes.Published)} className="text-gray-400">{DateFormatter(post.attributes.Published)}</time>
                            <Chips label={post.attributes.Category} link={`/notes/${post.attributes.Category}`} />
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-2xl font-semibold leading-6 text-pink-800 hover:rainbow-bg">
                            <Link href={`/notes/${post.attributes.Category}/${post.attributes.Slug}`}>
                                {post.attributes.Title}
                            </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 leading-6 text-gray-400">{post.attributes.Summary}</p>
                        </div>
                    </article>
                </div>
            )
        }) : 
        <div className="py-10">
            <p className="text-center text-gray-400">stay tuned, be back in a jiffy!<Emoji symbol="☕" /></p>
        </div>
    }

    const GoToNotes = () => {
        return (
            <div className="flex justify-center pt-5 pb-3">
                <Link href="/notes" className="my-4 relative inline-flex items-center justify-center rounded-full p-0.5 mb-2 me-2 overflow-hidden bg-cpink-900 hover:rainbow-btn">
                    <span className="relative transition-all ease-in duration-75 rounded-full text-gray-400 bg-cpink-800 hover:bg-slate-900">
                        <span className="relative block px-7 py-2.5 transition-all rounded-full ease-in duration-75 text-gray-400 bg-cpink-800  hover:rainbow-bg">
                            more
                        </span>
                    </span>
                </Link>
            </div>
        )
    }


    return (
        <>
            <AllPosts />
            {!noReadMoreBtn && <GoToNotes/>}
        </> 
    )
}

export default BodyComponent