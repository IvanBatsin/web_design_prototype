import React from 'react';
import styles from './styles.module.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Typography from 'antd/lib/typography';

const InfoBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Typography.Title level={2}>Контакты</Typography.Title>
        <p>Компания: «CDesign»</p>
        <p>Телефон: <strong>+7 999 999 99 99</strong></p>
        <p>Email: <strong>CDesign@dest.com</strong></p>
        <p>ИНН: 7743315767</p>
        <p>КПП: 7743315767</p>
        <p>ОГРН: 1197746564597</p>
        <p>Офис: Москва, Космонавта Волкова 20</p>
        <span>Юр. адрес: 125183, Москва, Генерала Рычагова 9-38</span>
      </div>
      <div className={styles.map_block}>
        <YMaps>
          <div className={styles.map}>
            <Map className={styles.map} defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
              <Placemark 
                geometry={[55.751574, 37.577856]}
              />
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  )
};

export default InfoBlock;