'use client'
import Image from "next/image"
import styles from './home.module.css'
import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";


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

function Home() {
  return (
    <div className="px-8 flex flex-col justify-center items-center bg-neutral-200 min-h-screen">
      <main className="max-w-4xl md:w-6/12 sm:w-full">
          <header className="w-full sticky content-center">
            <div className="flex flex-row">
              <div className="basis-3/4">
                <h1 className={`${styles.headerTitle} text-black font-bold`}>britta oblan</h1>
              </div>
              <div className="flex flex-row basis-1/4 justify-end align-middle items-center">
                <SocialMedia link={myConfig.linkedin}><AiFillLinkedin size="1.7em" className="p-0.5 text-neutral-400"/></SocialMedia> 
                <SocialMedia link={myConfig.github}><AiOutlineGithub size="1.7em" className="p-0.5 text-neutral-400"/></SocialMedia>
                <SocialMedia link={myConfig.instagram}><AiFillInstagram size="1.7em" className="p-0.5 text-neutral-400"/></SocialMedia>
              </div>
            </div>
          </header>
          <section id="scroll-container" className="w-full overflow-y-auto h-[calc(100vh-14rem)] pb-8 scroll-smooth">
            <div id="about"></div>
            <hr className={`${styles.border} my-8`}/>
            <div className="flex flex-row">
              <div className="basis-3/4">
                <h2 className="text-neutral-400 font-bold text-3xl">about</h2>
                <p className="text-neutral-600 text-sm">I am an Application Developer from Cebu, Philippines, living in Singapore.</p>
              </div>
              <div className="flex flex-row basis-1/4 justify-end align-middle items-center">
                <Image
                  src="/assets/britta oblan - software engineer - PH.jpg"
                  width={100}
                  height={100}
                  alt="Britta Oblan - Software Engineer from PH"
                  style={{
                    borderRadius: '50px',
                    border: '1px solid #ffffff',
                    margin: '20px 0 20px 20px',
                    justifyContent: 'flex-end'
                  }}
                />
              </div>
            </div>
            <div id="talk">
              <hr className={`${styles.border} my-8`}/>
              <h2 className="text-neutral-400 font-bold text-3xl">let's talk</h2>
              <div className="py-8">
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                  </div>
                  </article>
              </div>
              <div className="py-8">
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                  </div>
                  </article>
              </div>
              <div className="py-8">
                <article className="flex max-w-xl flex-col items-start justify-between">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                    <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Boost your conversion rate
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                  </div>
                  </article>
              </div>
            </div>
            <div id="connect">
              <hr className={`${styles.border} my-8`}/>
              <h2 className="text-neutral-400 font-bold text-3xl">let's connect</h2>
              <div className="flex flex-row basis-1/3 justify-start align-middle items-center">
                <SocialMedia link={myConfig.linkedin}><AiFillLinkedin size="1.7em" className="p-0.5 text-neutral-400"/></SocialMedia> 
                <SocialMedia link={myConfig.github}><AiOutlineGithub size="1.7em" className="p-0.5 text-neutral-400"/></SocialMedia>
                <SocialMedia link={myConfig.instagram}><AiFillInstagram size="1.7em" className="p-0.5 text-neutral-400"/></SocialMedia>
              </div>
            </div>
          </section>
          <footer className="w-full sticky mb-8">
            <hr className={`${styles.border} mb-8`}/>
            <p className="text-black"><a href="#about">about</a> | <a href="#talk">let's talk</a> | <a href="#connect">let's connect</a></p>
          </footer>
      </main>
    </div>
  )
}

export default Home    