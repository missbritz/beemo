import Emoji from "./emoji"

const BodyComponent = ({ posts }: any) => {
    console.log(posts.length)
    return (
        posts.length ? posts.map((post:any) => {
            return (
                <div className="py-8">
                    <article className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                        <time datetime="2020-03-16" className="text-gray-500">{post.attributes.Published}</time>
                        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{post.attributes.Category}</a>
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            {post.attributes.Title}
                        </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600">{post.attributes.Summary}</p>
                    </div>
                    </article>
                </div>
            )
        }) : 
        <div className="py-10">
            <p className="text-center text-neutral-600">stay tuned, we'll be back in a jiffy!<Emoji symbol="☕" /></p>
        </div>
    )
}

export default BodyComponent