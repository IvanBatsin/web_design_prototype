import Typography from "antd/lib/typography";
import React from "react";
import styles from './styles.module.css';

const CarouselItem: React.FC = () => {
  return (
    <div className={styles.carousel_item}>
      <div className={styles.carousel_info}>
        <div>
          <Typography.Title level={4}>CRM/ERP система стрелкового клуба	«Калибр»</Typography.Title>
          <p>Система включает функции, адаптированные под специфику стрелкового	клуба	(запись,	осуществление	услуги,	учет оружия и	т.п.).</p>
          <p>Автоматизированы вопросы учета, ведения документации (сканирование, распознавание, генерация), отчетности, оплаты и т.д.</p>
        </div>
        <div>
          <Typography.Title level={5}>Технологии</Typography.Title>
          <div className={styles.technologies_block}>
            <div className={styles.technology_item}>Kotlin</div>
            <div className={styles.technology_item}>Java E8</div>
            <div className={styles.technology_item}>Java E8</div>
            <div className={styles.technology_item}>Java E8</div>
            <div className={styles.technology_item}>Java E8</div>
          </div>
        </div>
      </div>
      <img className={styles.img} src="/carousel/calibr.png" alt="illustration" />
    </div>
  )
}

export default CarouselItem;