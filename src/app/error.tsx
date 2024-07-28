"use client";
import client from "@/utils/apollo-client";
import ConnectComponent from "@/components/connect";
import ToolkitComponent from '@/components/toolkit';
import BackButton from "../components/back-button";
import { getMyProfile } from '@/queries/my-profile';
import PageWrapper from "@/components/page-wrapper";

async function NotFound() {
  const profile = await client.query({
    query: getMyProfile
  })

  return (
    <PageWrapper profile={profile}>
      <NotFound />
    </PageWrapper>
  )
}

export default NotFound    