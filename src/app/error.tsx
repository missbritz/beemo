"use client";
import client from "@/utils/apollo-client";
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