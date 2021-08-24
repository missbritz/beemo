import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect'
import { AiFillLinkedin, AiOutlineGithub, AiFillInstagram } from "react-icons/ai";
import withGA from "next-ga";
import Router from "next/router";

const Emoji = props => (
  <span role="img" aria-label={props.symbol}>{props.symbol}</span>
);

const SocialMedia = props => {
   return (
    <a href={props.link} target="_blank">
      {props.children}
    </a>
   )
}

const isProductionGA = process.env.GA_ID;

const myConfig = {
  linkedin: 'https://www.linkedin.com/in/brittaoblan',
  instagram: 'https://www.instagram.com/missbritz/',
  github: 'https://github.com/missbritz'
}

const Home = () => {
  //Todo:
  // Will fetch data somewhere else.  Still deciding
  const [text, setText] = useState('brewing something really exciting');
  const [next, setNext] = useState(0);
  const facts = [
    "i'm a software engineer",
    "i run at least 10 miles per week",
    "i love music",
    "i turn coffee to codes",
    "i've been working on a gaming app, wip! yas!",
    "i do yoga",
    "i'm nothing fancy, just pure awesomeness! :P",
    "i'm a UI designer turned UI Engineer"
  ]

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Britta Oblan - Software Engineer from PH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img className={styles.pic} src="/assets/britta oblan - software engineer.jpg" alt="Britta Oblan - Software Engineer from PH" width={150} height={150} />
        <p className={styles.greeting}>hi! <Emoji symbol="👋" /> I'm</p>
        <h1 className={styles.title}>
          <span className={styles.titleBold}>britta oblan</span>
        </h1>
        <h2 className={styles.titleNonBold}>Software Engineer from PH, living in SG</h2>
        <hr className={styles.border}/>
        <div className={styles.Typewriter}>
          <Typewriter
            options={{
              strings: facts,
              autoStart: true,
              pauseFor: 2500,
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

export default withGA(isProductionGA, Router)(Home)
