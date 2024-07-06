import Image from "next/image"
import styles from './home.module.css'
import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";
import BodyComponent from "../components/body";
import client from "../utils/apolloClient";
import { gql } from "@apollo/client";
import ProfileComponent from "@/components/profile";
import ConnectComponent from "@/components/connect";

const SocialMedia = (props:any) => {
    return (
    <a href={props.link} target="_blank">
      {props.children}
    </a>
    )
}

const myConfig = {
  linkedin: 'https://www.linkedin.com/in/brittaoblan',
  instagram: 'https://www.instagram.com/missbritz/',
  github: 'https://github.com/missbritz'
}

async function Home() {

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
                    }
                }
            }
        }
    `,
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
                  Icon
                  Url
                }
              }
            }
          }
        }
    `,
  })

  return (
    <div className="px-8 flex flex-col justify-center items-center bg-neutral-200 min-h-screen">
      <main className="max-w-4xl md:w-6/12 sm:w-full">
          <header className="w-full sticky content-center">
            <div className="flex flex-row">
              <div className="basis-3/4">
                <h1 className={`${styles.headerTitle} text-black font-bold`}>britta oblan</h1>
              </div>
              <div className="flex flex-row basis-1/4 justify-end align-middle items-center">
                <SocialMedia link={myConfig.linkedin}><AiFillLinkedin size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/></SocialMedia> 
                <SocialMedia link={myConfig.github}><AiOutlineGithub size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/></SocialMedia>
                <SocialMedia link={myConfig.instagram}><AiFillInstagram size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/></SocialMedia>              </div>
            </div>
            <hr className={`${styles.border}`}/>
          </header>
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-14rem)] pb-8 scroll-smooth">
            <div id="about" className="pt-8"></div>
            {profile?.data?.myProfile?.data && <ProfileComponent profile={profile.data.myProfile.data}/>}
            <div id="talk">
              <hr className={`${styles.border} my-8`}/>
              <h2 className="text-neutral-400 font-bold text-3xl">let's talk</h2>
              {posts?.data?.posts?.data && <BodyComponent posts={posts?.data?.posts?.data}/>}
            </div>
            <div id="connect">
              <hr className={`${styles.border} my-8`}/>
              <h2 className="text-neutral-400 font-bold text-3xl">let's connect</h2>
              <div className="flex flex-row basis-1/3 justify-start align-middle items-center">
                <SocialMedia link={myConfig.linkedin}><AiFillLinkedin size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/></SocialMedia> 
                <SocialMedia link={myConfig.github}><AiOutlineGithub size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/></SocialMedia>
                <SocialMedia link={myConfig.instagram}><AiFillInstagram size="1.7em" className="p-0.5 text-neutral-400 hover:text-black focus:text-black"/></SocialMedia>
              </div>
            </div>
            {profile?.data?.myProfile?.data?.attributes?.social && <ConnectComponent social={profile?.data?.myProfile?.data?.attributes?.social}></ConnectComponent>}
          </section>
          <footer className="w-full sticky">
            <hr className={`${styles.border} mb-8`}/>
            <p className="text-neutral-400"><a href="#about" className="hover:text-black focus:text-black">about</a> | <a href="#talk" className="hover:text-black focus:text-black">let's talk</a> | <a href="#connect" className="hover:text-black focus:text-black">let's connect</a></p>
          </footer>
      </main>
    </div>
  )
}

export default Home    