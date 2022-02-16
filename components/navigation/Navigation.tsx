import Breadcrumb from "antd/lib/breadcrumb/Breadcrumb";
import Link from "next/dist/client/link";
import React from "react";
import styles from './styles.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Breadcrumb>
        <Breadcrumb.Item>
        <Link href={'/'}>Главная</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link href={'/'}>Услуги</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </nav>
  )
}

export default Navigation;