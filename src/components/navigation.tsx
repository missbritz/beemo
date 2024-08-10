"use client"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const router = usePathname();
    console.log(router)

    const isActiveParent = (href:string) => router.includes(href)
    const isCurrentPage = (href:string) => router === href
    return (
        <p className="text-gray-400"><a href={`/`} className={`${isCurrentPage('/') ? `rainbow-bg` : ``} hover:rainbow-bg`}>about</a> | <a href="/notes" className={`${isActiveParent('/notes') ? `rainbow-bg` : ``} hover:rainbow-bg`}>notes</a> | <a href="/lab" className={`${isCurrentPage('/lab/') ? `rainbow-bg` : ``} hover:rainbow-bg`}>lab</a></p>
    )
}