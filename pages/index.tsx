import React from 'react';
import { Button, Typography } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import CarouselComponent from '../components/carousel/CarouselBlock';
import DevelopmentBlock from '../components/development/Development';
import Feedback from '../components/feedback/Feedback';
import InfoBlock from '../components/infoBlock/InfoBlock';
import Parallax from '../components/parallax/ParallaxContainer';
import Partners from '../components/partners/Partners';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const feedbackRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (): void => {
    const topOffest = feedbackRef.current?.getBoundingClientRect().top;
    window.scroll({behavior: 'smooth', top: topOffest! - 100});
  }
  return (
    <>
      <Head>
        <title>Студия web-дизайна CDesign</title>
        <meta name="description" content="Студия web-дизайна" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <header>
        <div className={styles.entry_block}>
          <div className={styles.entry_block_overlay}>
            <div className={styles.entry_block_info}>
              <Typography.Text className={styles.text_secondary}>С 2003</Typography.Text>
              <Typography.Text className={styles.text_heading} strong underline>CDesign - Разработка ИТ решений</Typography.Text>
              <Typography.Text className={`${styles.text_heading} ${styles.text_heading_thin}`}>Создаем ИТ решения, повышающие эффективность бизнеса наших клиентов</Typography.Text>
              <Button onClick={handleScroll} className={styles.btn} size='large' ghost>Обсудить проект</Button>
            </div>
          </div>
        </div>
      </header>

      <Content className={styles.content}>
        <DevelopmentBlock/>
      </Content>
      <Parallax/>
      <Content className={styles.content}>
        <CarouselComponent/>
        <Partners/>
      </Content>
      <Feedback feedbackRef={feedbackRef}/>
      <Content className={styles.content}>
        <InfoBlock/> 
      </Content>
    </>
  )
}

export default Home
