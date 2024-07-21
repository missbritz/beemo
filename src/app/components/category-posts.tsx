import Emoji from "./emoji"
import Link from "next/link"
import styles from "@/app/home.module.css"

const CategoryPosts = ({ posts }: any) => {
    return (
        posts.length ? posts.map((post:any) => {
            return (
                <div>
                    <article className="flex flex-col items-start justify-between">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime="2020-03-16" className="text-gray-500">{post.attributes.Published}</time>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link href={`/notes/${post.attributes.Category}/${post.attributes.Slug}`}>
                                <span className="absolute inset-0"></span>
                                {post.attributes.Title}
                            </Link>
                            </h3>
                            <p className="mt-5 line-clamp-3 leading-6 text-neutral-600">{post.attributes.Summary}</p>
                        </div>
                        <hr className={`${styles.border} my-8`}/>
                    </article>
                </div>
            )
        }) : 
        <div className="py-10">
            <p className="text-center text-neutral-600">stay tuned, we'll be back in a jiffy!<Emoji symbol="☕" /></p>
        </div>
    )
}

export default CategoryPosts