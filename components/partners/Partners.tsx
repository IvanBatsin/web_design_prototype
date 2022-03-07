import { Typography } from "antd";
import Link from "next/link";
import React from "react";
import styles from './styles.module.css';

const componentData: string[] = ['ath', 'donata', 'sabre'];

const Partners: React.FC = () => {
  return (
    <div className={styles.container}>
      <Typography.Title className={styles.title} level={2}>Наши клиенты</Typography.Title>
      <div className={styles.partners_container}>
        {componentData.map(item => <Link key={item} href="/"><img className={styles.partner} src={`/partners/${item}.png`} alt={item}/></Link>)}
      </div>
    </div>
  )
}

export default Partners;