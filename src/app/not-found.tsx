import client from "../utils/apollo-client";
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
      <div>
        <hr className="my-8 border-b border-solid border-slate-800"/>
        <BackButton>{`< back`}</BackButton>
        <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">Not Found - home</h2>
        <p className="text-gray-400 max-w-prose my-2 text-sm">Oops! Looks like you took a wrong turn.</p>
      </div>
      {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <ConnectComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks}></ConnectComponent>}
        <div id="toolkit" className="pt-8">
        <hr className="my-8 border-b border-solid border-slate-800"/>
        <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">The Toolkit</h2>
        <p className="text-gray-400 max-w-prose my-2 text-sm">Built with these swags</p>
        {profile?.data?.myProfile?.data?.attributes?.KitIcons && <ToolkitComponent icons={profile?.data?.myProfile?.data?.attributes?.KitIcons}></ToolkitComponent>}
      </div>
    </PageWrapper>
  )
}

export default NotFound    