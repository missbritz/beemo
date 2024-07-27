import client from "../utils/apollo-client";
import ProfileComponent from "@/app/components/profile";
import ConnectComponent from "@/app/components/connect";
import ToolkitComponent from '@/app/components/toolkit';
import FooterComponent from '@/app/components/footer';
import TopBarComponent from '@/app/components/topbar';
import BodyComponent from "@/app/components/body";
import { getMyProfile } from '@/app/queries/my-profile';
import { getAllPost } from "./queries/posts";

async function Home() {
  const posts = await client.query({
    query: getAllPost
  })

  const profile = await client.query({
    query: getMyProfile
  })

  return (
    <div className="px-6 md:px-8 flex flex-col justify-center items-center min-h-screen text-slate-500">
      <main className="max-w-5xl md:w-7/12 sm:w-full">
          {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-10rem)] pb-8 scroll-smooth">
            <div id="about" className="pt-8">
              {profile?.data?.myProfile?.data && <ProfileComponent profile={profile.data.myProfile.data}/>}
            </div>
            <div id="talk">
              <hr className="my-8 border-b border-solid border-slate-800"/>
              <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">Notes</h2>
              {posts?.data?.posts?.data && <BodyComponent posts={posts?.data?.posts?.data} noReadMoreBtn={false}/>}
            </div>
            {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <ConnectComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks}></ConnectComponent>}
              <div id="toolkit" className="pt-8">
              <hr className="my-8 border-b border-solid border-slate-800"/>
              <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">The Toolkit</h2>
              <p className="text-gray-400 max-w-prose my-2 text-sm">Built with these swags</p>
              {profile?.data?.myProfile?.data?.attributes?.KitIcons && <ToolkitComponent icons={profile?.data?.myProfile?.data?.attributes?.KitIcons}></ToolkitComponent>}
            </div>
          </section>
          <FooterComponent/>
      </main>
    </div>
  )
}

export default Home    