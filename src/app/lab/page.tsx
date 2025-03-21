import type { Metadata } from "next";
import { getLab } from "../../queries/lab";
import React from "react";
import client from "../../utils/apollo-client";
import LabItems from "../../components/lab-items";

export const metadata: Metadata = {
    title: "Britta Oblan - Lab",
    description: "",
};

export default async function lab() {

    const getLabItems = await client.query({ query: getLab })

    const allLabItems = getLabItems?.data?.labs?.data?.length && getLabItems?.data?.labs?.data

    return (
        <div>
            <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl capitalize pb-5">Lab</h2>
            {allLabItems.length && <LabItems items={allLabItems}/>}
        </div>
    )
}