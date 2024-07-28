import BackButton from "@/components/back-button";

async function PostNotFound() {
  return (
    <div className="px-8 flex flex-col justify-center items-center">
      <BackButton>{`< back`}</BackButton>
      <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">Not found</h2>
      <p className="text-gray-400 max-w-prose my-2 text-sm">Oops! Looks like you took a wrong turn.</p>
      <hr className="my-8 border-b border-solid border-slate-800"/>
    </div>
  )
}

export default PostNotFound    