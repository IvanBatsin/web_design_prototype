import Typography from "antd/lib/typography";
import React from "react";
import { ICarouselItem } from "./CarouselBlock";
import styles from './styles.module.css';

interface Props {
  carouselItem: ICarouselItem
}

const CarouselItem: React.FC<Props> = ({carouselItem}) => {
  return (
    <div className={styles.carousel_item}>
      <div className={styles.carousel_info}>
        <div>
          <Typography.Title level={4}>{carouselItem.title}</Typography.Title>
          {carouselItem.description.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </div>
        <div>
          <Typography.Title level={5}>Технологии</Typography.Title>
          <div className={styles.technologies_block}>
            {carouselItem.stack.map((item, index) => {
              return <div key={index} className={styles.technology_item}>{item}</div>
            })}
          </div>
        </div>
      </div>
      <img className={styles.img} src={carouselItem.img} alt="illustration" />
    </div>
  )
}

export default CarouselItem;