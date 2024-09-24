import Link from "next/link";
import React from "react";

export default function Chips ({ label, link }: any) {

    const ChipItem = ({ label }: any) => {
        return (
            <span className="relative transition-all ease-in duration-75 rounded-full text-gray-400 bg-cpink-800 hover:bg-slate-900 text-xs">
                <span className="relative block font-medium px-3 py-1.5 transition-all ease-in duration-75 text-gray-400 bg-cpink-800 rounded-full hover:rainbow-bg">
                    {label}
                </span>
            </span>
        )
    }

    return (
        link ? 
            <Link href={link} className="relative inline-flex rounded-full bg-cpink-800 px-0.5 py-0.5 font-medium text-xs text-gray-600 hover:rainbow-btn">
                <ChipItem label={label}/>
            </Link>
        : <ChipItem label={label}/>
    )
}