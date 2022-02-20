import Carousel from "antd/lib/carousel";
import Typography from "antd/lib/typography";
import React from "react";
import styles from './styles.module.css';

const CarouselComponent: React.FC = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
  };

  return (
    <div>
      <Typography.Title className={styles.title} level={3}>Несколько примеров из портфолио</Typography.Title>
      <Carousel dots={false} autoplay autoplaySpeed={7000}>
        <div className={styles.carousel_item}>
          <div className={styles.carousel_info}>
            <Typography.Title level={4}>CRM/ERP система стрелкового клуба	«Калибр»</Typography.Title>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab necessitatibus placeat inventore porro itaque commodi fugit, nisi officia incidunt nam rerum culpa tempore suscipit dolorem quia debitis mollitia alias?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ab necessitatibus placeat inventore porro itaque commodi fugit, nisi officia incidunt nam rerum culpa tempore suscipit dolorem quia debitis mollitia alias?</p>
            <Typography.Title level={5}>Технологии</Typography.Title>
            <div className={styles.technologies_block}>
              <div className={styles.technology_item}>Kotlin</div>
              <div className={styles.technology_item}>Java E8</div>
            </div>
          </div>
          <img src="/carousel/calibr.png" alt="illustration" />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;