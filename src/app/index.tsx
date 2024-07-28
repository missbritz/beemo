import Layout from './layout'
import styles from './home.module.css'
import client from "./utils/apollo-client";
import { gql } from "@apollo/client";
import ProfileComponent from "@/components/profile";
import ConnectComponent from "@/components/connect";
import ToolkitComponent from '@/components/toolkit';
import FooterComponent from '@/components/footer';
import TopBarComponent from '@/components/topbar';
import BodyComponent from "@/components/body";

 
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
    <div className="px-6 md:px-8 flex flex-col justify-center items-center min-h-screen text-slate-500">
      <main className="max-w-5xl md:w-7/12 sm:w-full">
          {profile?.data?.myProfile?.data?.attributes && <TopBarComponent profile={profile}/>}
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-10rem)] pb-8 scroll-smooth">
            <div id="about" className="pt-8">
              {profile?.data?.myProfile?.data && <ProfileComponent profile={profile.data.myProfile.data}/>}
            </div>
            <div id="talk">
              <hr className={`${styles.border} my-8`}/>
              <h2 className="text-neutral-900 font-bold text-3xl">let's talk</h2>
              {posts?.data?.posts?.data && <BodyComponent posts={posts?.data?.posts?.data}/>}
            </div>
            {profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks && <ConnectComponent social={profile?.data?.myProfile?.data?.attributes?.SocialMediaLinks}></ConnectComponent>}
              <div id="toolkit" className="pt-8">
              <hr className={`${styles.border} my-8`}/>
              <h2 className="text-neutral-900 font-bold text-3xl">the toolkit</h2>
              <p className="text-neutral-600 max-w-prose my-2 text-sm">Built with these swags </p>
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
