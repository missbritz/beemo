import DateFormatter from "@/utils/date-formatter";
import Link from "next/link";
import RichTextBlockRenderer from "./block-renderer";

export default function SinglePost ({ post }: any) {
    return (
        <article className="flex flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={DateFormatter(post.attributes.Published)} className="text-gray-400 text-sm">{DateFormatter(post.attributes.Published)}</time>
            </div>
            <div className="group relative w-full">
                <h2 className="text-cpink-900 font-bold text-3xl md:text-5xl my-5">
                {post.attributes.Title}
                </h2>
                <Link href={`/notes/${post.attributes.Category}`} className="relative z-0 rounded-full bg-slate-900 px-3 py-1.5 font-medium text-gray-600  hover:rainbow-bg text-sm">{post.attributes.Category}</Link>
                <p className="text-gray-400 my-3">{post.attributes.Summary}</p>
                <hr className="my-8 border-b border-solid border-slate-800"/>
                {post.attributes.Content && <RichTextBlockRenderer content={post.attributes.Content} />}
            </div>
        </article>
    )
}