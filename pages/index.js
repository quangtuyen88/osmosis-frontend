import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Simple Click Game by KenZ</title>
        <meta name="description" content="Created by Kenz" />
      </Head>

      <header className={styles.header}>
        <h1>Simple Click Game by KenZ</h1>
      </header>

      <main className={styles.main}>
        <h2 className={styles.score}>Your Score: {score}</h2>
        <button
          className={styles.gameButton}
          onClick={handleClick}
        >
          Click Me!
        </button>
      </main>
    </div>
  );
}
