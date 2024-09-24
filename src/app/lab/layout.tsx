import React from "react";
import client from "@/utils/apollo-client";
import type { Metadata } from "next";
import PageWrapper from "@/components/page-wrapper";
import BackButton from "@/components/back-button";
import { getMyProfile } from "../../queries/my-profile";

export const metadata: Metadata = {
  title: "Britta Oblan - Lab",
  description: "",
};

async function SlugLayout({ children } : any) {

  const profile = await client.query({
    query: getMyProfile
  })
  
  return (
    <PageWrapper profile={profile}>
        <div className="my-8">
          <BackButton>{`< back`}</BackButton>
          {children}
      </div>
    </PageWrapper>
  )
}

export default SlugLayout