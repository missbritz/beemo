import { sanitizeUrl } from "@/utils/sanitize-url"
import Emoji from "./emoji"
import Link from "next/link"

const CategoryListComponent = ({ posts }: any) => {

    let allCategory:any = []
    const categoryList = posts.length ? posts.map((post:any) => {
        if(allCategory.indexOf(post.attributes.Category) > -1) return allCategory
        allCategory = [].concat(...allCategory, post.attributes.Category)
        return allCategory
    }) : []

    console.log(categoryList)

    return (
        categoryList.length ? categoryList.map((cat:any) => {
            return (
                <div className="py-10">
                    <div className="group relative">
                        <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <Link href={`/category/${categoryList}`}>
                                <span className="absolute inset-0"></span>
                                {categoryList}
                            </Link>
                        </h3>
                    </div>
                </div>
            )
        }) : 
        <div className="py-10">
            <p className="text-center text-neutral-600">stay tuned, we'll be back in a jiffy!<Emoji symbol="☕" /></p>
        </div>
    )
}

export default CategoryListComponent