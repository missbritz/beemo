import client from "../../utils/apollo-client";
import { gql } from "@apollo/client";
import FooterComponent from '@/app/components/footer';
import TopBarComponent from '@/app/components/topbar';
import { getMyProfile } from "../queries/my-profile";

async function SlugLayout({ children } : any) {

  const profile = await client.query({
    query: getMyProfile
  })

  return (
    <div className="px-6 md:px-8 flex flex-col justify-center items-center min-h-screen text-slate-500">
      <main className="max-w-5xl md:w-7/12 sm:w-full">
          {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-10rem)] pb-8 scroll-smooth">
            <div className="my-8">
              {children}
            </div>
          </section>
          <FooterComponent/>
      </main>
    </div>
  )
}

export default SlugLayout