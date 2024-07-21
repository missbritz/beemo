import Emoji from "./emoji"
import Link from "next/link"
import styles from "@/app/home.module.css"

const CategoryListComponent = ({ posts }: any) => {

    let allCategory:any = []
    posts.length ? posts.map((post:any) => {
        if(allCategory.indexOf(post.attributes.Category) === -1) {
            allCategory.push(post.attributes.Category)
            return allCategory
        }
        return
    }) : []

    return (
        allCategory.length ? allCategory.map((category:any) => {
            return (
                <div>
                    <div className="group relative">
                        <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 capitalize">
                            <Link href={`/notes/${category}`}>
                                <span className="absolute inset-0"></span>
                                {category}
                            </Link>
                        </h3>
                        <hr className={`${styles.border} my-8`}/>
                    </div>
                </div>
            )
        }) : 
        <div className="py-10">
            <p className="text-center text-neutral-600">stay tuned, be back in a jiffy!<Emoji symbol="☕" /></p>
        </div>
    )
}

export default CategoryListComponent