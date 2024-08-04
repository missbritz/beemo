import DateFormatter from "@/utils/date-formatter";
import RichTextBlockRenderer from "./block-renderer";
import Chips from "./chips";

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
                <Chips label={post.attributes.Category} link={`/notes/${post.attributes.Category}`} />
                <p className="text-gray-400 my-3">{post.attributes.Summary}</p>
                <hr className="my-8 border-b border-solid border-slate-800"/>
                {post.attributes.Content && <RichTextBlockRenderer content={post.attributes.Content} />}
            </div>
        </article>
    )
}