import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import logo from '../public/SOFUL.png';

export default function Home() {
  const [style, setStyle] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>soful - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/SOFUL.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src={logo}
          width={255}
          height={255}
        />

        <h1 className={styles.title}>
          soful
        </h1>

        <p className={styles.description}>
          select your learning style
        </p>

        <div className='styles.grid'>
          <Link href='./auditory' className='styles.card'>
            <h2>
              auditory
            </h2>
          </Link>
          <Link href='./reading' className='styles.card'>
            <h2>
              reading
            </h2>
          </Link>
          <Link href='./visual' className='styles.card'>
            <h2>
              visual
            </h2>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://sphero.com/blogs/news/learning-styles-for-kids"
          target="_blank"
          rel="noopener noreferrer"
        >
          don't know what your learning style is? click me to check out this article!
        </a>
      </footer>
    </div>
  )
}
