import type { Metadata } from "next";
import { getLab } from "../../queries/lab.ts";
// import LabItems from "../../components/lab-items.tsx";
import React from "react";
import client from "../../utils/apollo-client.ts";
import LabItems from "../../components/lab-items.tsx";

export const metadata: Metadata = {
    title: "Britta Oblan - Lab",
    description: "",
};

export default async function lab() {

    const getLabItems = await client.query({ query: getLab })

    const allLabItems = getLabItems?.data?.labs?.data?.length && getLabItems?.data?.labs?.data
    //console.log(allLabItems)
    return (
        <div>
            <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl capitalize pb-5">Notes</h2>
            {allLabItems.length && <LabItems items={allLabItems}/>}
        </div>
    )
}