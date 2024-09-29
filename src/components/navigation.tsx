"use client"
import { usePathname } from "next/navigation"

export default function Navigation() {
    const router = usePathname();
    console.log(router)

    const isActiveParent = (href:string) => router.includes(href)
    const isCurrentPage = (href:string) => router === href
    return (
        <p className="text-gray-400"><a href={`/`} className={`px-1 border-gray-400 border-solid ${isCurrentPage('/') ? `rainbow-bg` : ``} hover:rainbow-bg`}>about</a><a href="/notes" className={`px-1 border-gray-400 border-solid ${isActiveParent('/notes') ? `rainbow-bg` : ``} hover:rainbow-bg`}>notes</a><a href="/lab" className={`pl-1 ${isCurrentPage('/lab/') ? `rainbow-bg` : ``} hover:rainbow-bg`}>lab</a></p>
    )
}