import { Col, Row, Space, Typography } from "antd";
import React from "react";
import styles from './styles.module.css';

const style = { background: '#0092ff', padding: '8px 0' };

const DevelopmentBlock: React.FC = () => {
  return (
    <div>
      <Typography.Title>Что мы разрабатываем</Typography.Title>
      <Row wrap={true} gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]} >
        <Col className="gutter-row" lg={12} xs={24} span={12}>
          <Row wrap={true} gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]} >
          <Col className="gutter-row" span={6}>
            <img src="/development/startap.svg" alt="startap" />
          </Col>
          <Col className="gutter-row" span={18}>
            <Typography.Title level={4}>Стартапы</Typography.Title>
            <Space direction="vertical">
            <Typography.Text>Поможем реализовать проект качественно и быстро.</Typography.Text>
            <Typography.Text>Сопровождение на всех этапах, развитие, масштабирование.</Typography.Text>
            <Typography.Text>Взаимодействие, советы, консультации, помощь.</Typography.Text>
            </Space>
          </Col>
          </Row>
        </Col>
        <Col className="gutter-row" lg={12} xs={24} span={12}>
        <Row wrap={true} gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]} >
          <Col className="gutter-row" span={6}>
            <img src="/development/mvp.svg" alt="startap" />
          </Col>
          <Col className="gutter-row" span={18}>
            <Typography.Title level={4}>Стартапы</Typography.Title>
            <Space direction="vertical">
            <Typography.Text>Составим четкий план реализации.</Typography.Text>
            <Typography.Text>Реализуем MVP-версию, быстро запустим.</Typography.Text>
            <Typography.Text>Поможем оценить и развить результат.</Typography.Text>
            </Space>
          </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DevelopmentBlock;