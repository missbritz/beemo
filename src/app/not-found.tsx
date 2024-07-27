import client from "../utils/apollo-client";
import ConnectComponent from "@/app/components/connect";
import ToolkitComponent from '@/app/components/toolkit';
import FooterComponent from '@/app/components/footer';
import TopBarComponent from '@/app/components/topbar';
import BackButton from "./components/back-button";
import { getMyProfile } from '@/app/queries/my-profile';

async function NotFound() {

  const profile = await client.query({
    query: getMyProfile
  })

  return (
    <div className="px-6 md:px-8 flex flex-col justify-center items-center min-h-screen text-slate-500">
      <main className="max-w-5xl md:w-7/12 sm:w-full">
          {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-10rem)] pb-8 scroll-smooth">
            <div>
              <hr className="my-8 border-b border-solid border-slate-800"/>
              <BackButton>{`< back`}</BackButton>
              <h2 className="text-cpink-900 font-bold text-2xl md:text-4xl">Not Found</h2>
              <p className="text-gray-400 max-w-prose my-2 text-sm">Oops! Looks like you took a wrong turn.</p>
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

export default NotFound    