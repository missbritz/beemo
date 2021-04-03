import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Typewriter from 'typewriter-effect';

const Home = () => {
  //Todo:
  // Will fetch data somewhere else.  Still deciding
  const [text, setText] = useState('brewing something really exciting');
  const [next, setNext] = useState(0);
  const facts = [
    "i'm a software engineer",
    "i run 10 miles per week",
    "i love music",
    "i turn coffee to codes"
  ]

  // useEffect(() => {
  //   //TODO:
  //   // - Update source of caption 
  //   setText(facts[next]);
    
  // }, [next])

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Britta Oblan - Software Engineer from PH</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          hi! I'm britta oblan
        </h1>
        <Typewriter
          options={{
            strings: facts,
            autoStart: true,
            pauseFor: 2500,
            loop: true
          }}
        />
      </main>
    </div>
  )
}

export default Home
