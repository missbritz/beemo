import client from "@/utils/apollo-client";
import ProfileComponent from "@/components/profile";
import ConnectComponent from "@/components/connect";
import ToolkitComponent from '@/components/toolkit';
import BodyComponent from "@/components/body";
import { getMyProfile } from '@/queries/my-profile';
import { getAllPost } from "../queries/posts";
import PageWrapper from "@/components/page-wrapper";

async function Home() {
  const posts = await client.query({
    query: getAllPost
  })

  const profile = await client.query({
    query: getMyProfile
  })

  return (
    <PageWrapper profile={profile}>
      <div id="about" className="pt-8">
        {profile?.data?.myProfile?.data && <ProfileComponent profile={profile.data.myProfile.data}/>}
      </div>
      <div id="talk">
        <hr className="my-8 border-b border-solid border-slate-800"/>
        <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">Notes</h2>
        {posts?.data?.posts?.data && <BodyComponent posts={posts?.data?.posts?.data} noReadMoreBtn={false}/>}
      </div>
      {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <ConnectComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks}></ConnectComponent>}
        <div id="toolkit">
        <hr className="my-8 border-b border-solid border-slate-800"/>
        <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">The Toolkit</h2>
        <p className="text-gray-400 max-w-prose my-2 text-sm">Built with these swags</p>
        {profile?.data?.myProfile?.data?.attributes?.KitIcons && <ToolkitComponent icons={profile?.data?.myProfile?.data?.attributes?.KitIcons}></ToolkitComponent>}
      </div>
    </PageWrapper>
  )
}

export default Home    