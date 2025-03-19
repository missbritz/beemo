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
            <Link href={lab.attributes.ProjectUrl} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-800 dark:border-gray-700 dark:bg-cblue-800 dark:hover:bg-gray-800 md:max-h-60 overflow-hidden" target="_blank">
                <img className="object-cover w-full rounded-t-lg h-96 md:w-48 md:rounded-none md:rounded-s-lg md:h-auto" src={img.url} alt={img.alternativeText} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{lab.attributes.ProjectName}</h5>
                    <div className="flex items-start flex-row gap-1 flex-wrap">{allChips.length ? allChips.map(i => <Chips key={i} label={i}/>) : null}</div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{lab.attributes.ProjectDescription}</p>
                </div>
            </Link>
        )
    }) : 
    <div className="py-10">
        <p className="text-center text-gray-400">Stay tuned — I'm cooking up something nice! <Emoji symbol="🧪" /><Emoji symbol="✨" /></p>
    </div>
}

export default LabItems