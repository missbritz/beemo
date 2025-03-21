"use client"

import React from "react";
import Emoji from "./emoji"
import Link from "next/link"
import "../app/globals.css";
import Chips from "./chips";
import { getImage } from "../utils/get-image";
import { StringToArray } from "../utils/string-to-array";

const LabItems = ({ items }: any) => {
    return items.length ? items.map((lab:any) => {
        const allChips = StringToArray(lab.attributes.Tags)
        const img = getImage(lab.attributes.ProjectImage)
        return (
            <Link href={lab.attributes.ProjectUrl} className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-800 dark:border-gray-700 dark:bg-cblue-800 dark:hover:bg-gray-800 overflow-hidden mb-6" target="_blank">
                <div className="w-full h-48 md:w-1/4 md:h-auto">
                    <img className="w-full h-full object-cover" src={img.url} alt={img.alternativeText} />
                </div>
                <div className="w-full md:w-3/4 p-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{lab.attributes.ProjectName}</h5>
                    <div className="flex items-start flex-row gap-1 flex-wrap mb-4">{allChips.length ? allChips.map(i => <Chips key={i} label={i}/>) : null}</div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{lab.attributes.ProjectDescription}</p>
                </div>
            </Link>
        )
    }) : 
    <div className="py-10">
        <p className="text-center text-gray-400">Stay tuned — I'm cooking up something nice! <Emoji symbol="🧪" /><Emoji symbol="✨" /></p>
    </div>
}

export default LabItems