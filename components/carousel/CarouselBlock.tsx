import Carousel from "antd/lib/carousel";
import Typography from "antd/lib/typography";
import React from "react";
import CarouselItem from "./CarouselItem";
import styles from './styles.module.css';

export interface ICarouselItem {
  title: string,
  description: string[],
  stack: string[],
  img: string 
}

type PageData = ICarouselItem[];

const data: PageData = [
  {
    title: 'CRM/ERP система стрелкового клуба	«Калибр»',
    img: '/carousel/calibr.png',
    description: [
      'Система включает функции, адаптированные под специфику стрелкового	клуба	(запись,	осуществление	услуги,	учет оружия и	т.п.).',
      'Автоматизированы вопросы учета, ведения документации (сканирование, распознавание, генерация), отчетности, оплаты и т.д.'
    ],
    stack: ['Kotlin', 'VueJs', 'PostgresQL', 'Linux']
  },
  {
    title: 'Интернет-магазин	tupperware-russia.ru,мобильные	приложения	(Android,	IOS)',
    img: '/carousel/tupperware.png',
    description: [
      'Для менеджеров магазина реализованы функции склада, управления публикацией товаров, управление заказами и	др.	Также	реализована	интеграция со службами доставки	(CDEK и	Почта	России).',
    ],
    stack: ['Kotlin', 'VueJs', 'Swift', 'PostgresQL', 'Linux', 'Android IOS']
  },
  {
    title: 'Образовательный портал для работы над проектами',
    img: '/carousel/school.png',
    description: [
      'Система представляет из себя информационно-образовательный портал, а также площадку для совместной работы над проектами в рамках учебного заведения для учеников, учителей и экспертов',
    ],
    stack: ['Kotlin', 'VueJs', 'Swift', 'PostgresQL', 'TelegramBot']
  }
];

const CarouselComponent: React.FC = () => {

  return (
    <div className={styles.carousel_container}>
      <Typography.Title className={styles.title} level={3}>Несколько примеров из портфолио</Typography.Title>
      <Carousel dots={false} autoplay autoplaySpeed={7000}>
        {data.map(item => <CarouselItem key={item.title} carouselItem={item}/>)}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;