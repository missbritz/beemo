import client from "@/utils/apollo-client";
import { getMyProfile } from "@/queries/my-profile";
import PageWrapper from "@/components/page-wrapper";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
  title: "Britta Oblan - notes",
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