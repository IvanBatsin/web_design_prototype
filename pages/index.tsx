import { Button, Typography } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Студия web-дизайна CDesign</title>
        <meta name="description" content="Студия web-дизайна" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.entry_block}>
          <div className={styles.entry_block_overlay}>
            <div className={styles.entry_block_info}>
              <Typography.Text className={styles.text_secondary}>С 2003</Typography.Text>
              <Typography.Text className={styles.text_heading} strong underline>CDesign - Разработка ИТ решений</Typography.Text>
              <Typography.Text className={`${styles.text_heading} ${styles.text_heading_thin}`}>Создаем ИТ решения, повышающие эффективность бизнеса наших клиентов</Typography.Text>
              <Button className={styles.btn} size='large' ghost>Обсудить проект</Button>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
