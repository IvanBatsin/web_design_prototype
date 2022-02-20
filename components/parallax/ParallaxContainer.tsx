import Typography from "antd/lib/typography";
import React from "react";
import styles from './styles.module.css';

const Parallax: React.FC = () => {
  return (
    <div className={styles.parallax}>
      <Typography.Title className={styles.parallax_title} level={3}>Наш опыт</Typography.Title>
      <p className={styles.parallax_text}>Имея сильную команду и тесно сотрудничая с клиентами, мы обеспечиваем полный цикл создания комплексных решений: от разработки стратегии, концепции, структуры и дизайна, до непосредственного внедрения и сопровождения.</p>
      <div className={styles.mask}></div>
    </div>
  );
}

export default Parallax;