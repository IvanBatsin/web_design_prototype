import Carousel from "antd/lib/carousel";
import Typography from "antd/lib/typography";
import React from "react";
import CarouselItem from "./CarouselItem";
import styles from './styles.module.css';

const CarouselComponent: React.FC = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
  };

  return (
    <div className={styles.carousel_container}>
      <Typography.Title className={styles.title} level={3}>Несколько примеров из портфолио</Typography.Title>
      {/* <Carousel dots={false} autoplay autoplaySpeed={7000}> */}
      <Carousel dots={false}>
        <CarouselItem/> 
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