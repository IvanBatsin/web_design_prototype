
import Typography from "antd/lib/typography";
import React from "react";
import DevelopmentBlockItem from "./DevelopmentBlockItem";
import styles from './styles.module.css';

export interface IDevelopmentBlockItem {
  img: string,
  title: string,
  text: string[]
}

export type IDevelopmentBlock = [IDevelopmentBlockItem, IDevelopmentBlockItem][];

const pageData: IDevelopmentBlock = [
  [
    {
      img: 'startap',
      title: 'Стартапы',
      text: [
        'Поможем реализовать проект качественно и быстро.',
        'Сопровождение на всех этапах, развитие, масштабирование.',
        'Взаимодействие, советы, консультации, помощь.'
      ]
    },
    {
      img: 'mvp',
      title: 'MVP-версии',
      text: [
        'Составим четкий план реализации.',
        'Реализуем MVP-версию, быстро запустим.',
        'Поможем оценить и развить результат.'
      ]
    }
  ],
  [
    {
      img: 'web-systems',
      title: 'Web-системы',
      text: [
        'Сервисы, сайты и порталы.',
        'Системы сбора данных и формирования отчетности.',
        'ERP/CRM - системы.',
        'Складские программы, интернет-магазины.'
      ]
    }, 
    {
      img: 'mobile-app',
      title: 'Мобильные приложения',
      text: [
        'Приложения под iOS и Android.',
        'Интеграция с Web-сервисами.',
        'Приложения для смарт-часов.'
      ]
    }
  ],
  [
    {
      img: 'desctop',
      title: 'Десктоп-приложения различного назначения',
      text: [
        'Управление оборудованием.',
        'Различные интеграции.',
        'Информационные и расчетные системы.'
      ]
    },
    {
      img: 'auto-solution',
      title: 'Комплексные решения автоматизации',
      text: [
        'Автоматизация бизнес-процессов.',
        'Автоматизация обслуживания клиентов.',
        'АСУ ТП.'
      ]
    }
  ]
]

const DevelopmentBlock: React.FC = () => {
  return (
    <div className={styles.development_block}>
      <Typography.Title className={styles.title}>Что мы разрабатываем</Typography.Title>
      {pageData.map((block, index) => {
        return <DevelopmentBlockItem key={index} block={block}/>
      })}
    </div>
  );
}

export default DevelopmentBlock;