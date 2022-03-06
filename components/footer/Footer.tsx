import Typography from "antd/lib/typography";
import React from "react";
import styles from './styles.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src="/common/logo.svg" alt="log" />
        <span>Design</span>
      </div>
      <div className={styles.info}>
      <Typography.Text strong>© 2003 - 2022, «CDesign»</Typography.Text>
      </div>
    </footer>
  )
}

export default Footer;