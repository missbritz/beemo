'use client'
import Image from "next/image"
import styles from './home.module.css'
import Typewriter from 'typewriter-effect'
import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";

const Emoji = (props:any) => (
  <span role="img" aria-label={props.symbol}>{props.symbol}</span>
);

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
  const facts = [
    "i'm a software engineer with interest on everything tech, finance and health",
    "i enjoy an active lifestyle - strength training and cardio",
    "i love music",
    "i'm nothing fancy, just pure awesomeness! :P",
    "i'm a UI designer turned UI Engineer"
  ]

  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/assets/britta oblan - software engineer - PH.jpg"
          width={150}
          height={150}
          alt="Britta Oblan - Software Engineer from PH"
          style={{
            borderRadius: '100px',
            border: '5px solid #ffffff'
          }}
        />
        <p className={styles.greeting}>hi! <Emoji symbol="👋" /> I'm</p>
        <h1 className={styles.title}>
          <span className={styles.titleBold}>britta oblan</span>
        </h1>
        <h2 className={styles.titleNonBold}>Software Engineer <br/>from Philippines <Emoji symbol="🇵🇭" />, living in Singapore<Emoji symbol="🇸🇬" /></h2>
        <hr className={styles.border}/>
        <div className={styles.Typewriter}>
          <Typewriter
            options={{
              strings: facts,
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <hr className={styles.border}/>
        <div className={styles.socialContainer}>
          <span>Follow me on </span>
          <div className={styles.social}>
            <SocialMedia link={myConfig.linkedin}><AiFillLinkedin size="1.5em" className={styles.icons}/></SocialMedia> 
            <SocialMedia link={myConfig.github}><AiOutlineGithub size="1.5em" className={styles.icons}/></SocialMedia> <SocialMedia link={myConfig.instagram}><AiFillInstagram size="1.5em" className={styles.icons}/></SocialMedia>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home    