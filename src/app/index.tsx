import Layout from './layout'
import client from "../utils/apollo-client";
import { gql } from "@apollo/client";
import ProfileComponent from "@/app/components/profile";
import ConnectComponent from "@/app/components/connect";
import ToolkitComponent from '@/app/components/toolkit';
import FooterComponent from '@/app/components/footer';
import TopBarComponent from '@/app/components/topbar';
import BodyComponent from "@/app/components/body";

 
export default async function Page() {
  const posts = await client.query({
    query: gql`
        query{
            posts {
                data {
                    id
                    attributes {
                        Title
                        Published
                        Content
                        Category
                        Summary
                        Slug
                    }
                }
            }
        }
    `
  })

  const profile = await client.query({
    query: gql`
        query{
          myProfile {
            data {
              id
              attributes {
                MainTitle
                MyIntro
                SocialMediaLinks {
                  Label
                  Url
                }
                KitIcons {
                  Label
                  Url
                }
              }
            }
          }
        }
    `
  })

  return (
    // bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
    // bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
    // bg-gradient-to-r from-cblue-900 from-0% via-cblue-800 via-80% to-cpink-900 to-100%
    // bg-gradient-to-r from-neutral-200 from-0% via-neutral-100 via-80% to-neutral-50 to-100%
    <div className="px-8 flex flex-col justify-center items-center bg-neutral-200 min-h-screen">
      <main className="max-w-4xl md:w-6/12 sm:w-full">
          {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-14rem)] pb-8 scroll-smooth">
            <div id="about" className="pt-8">
              {profile?.data?.myProfile?.data && <ProfileComponent profile={profile.data.myProfile.data}/>}
            </div>
            <div id="talk">
              <hr className="my-8 border-b border-solid border-slate-800"/>
              <h2 className="text-gray-500 font-bold text-3xl">let's talk</h2>
              {posts?.data?.posts?.data && <BodyComponent posts={posts?.data?.posts?.data}/>}
            </div>
            {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <ConnectComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks}></ConnectComponent>}
              <div id="toolkit" className="pt-8">
              <hr className="my-8 border-b border-solid border-slate-800"/>
              <h2 className="text-gray-500 font-bold text-3xl">the toolkit</h2>
              <p className="text-gray-500 max-w-prose my-2 text-sm">Built with these swags </p>
              {profile?.data?.myProfile?.data?.attributes?.KitIcons && <ToolkitComponent icons={profile?.data?.myProfile?.data?.attributes?.KitIcons}></ToolkitComponent>}
            </div>
          </section>
          <FooterComponent/>
      </main>
    </div>
  )
}
 
Page.getLayout = function getLayout(page:any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
