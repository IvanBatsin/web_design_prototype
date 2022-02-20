import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
import Space from "antd/lib/space";
import Typography from "antd/lib/typography";
import React from "react";
import { IDevelopmentBlockItem } from "./Development";
import styles from './styles.module.css';

interface Props {
  block: [IDevelopmentBlockItem, IDevelopmentBlockItem]
}

const DevelopmentBlockItem: React.FC<Props> = ({block}) => {
  return (
    <Row className={styles.block_row} wrap={true} gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]} >
      {block.map(item => {
        return (
          <Col key={item.img} className="gutter-row" lg={12} xs={24} span={12}>
            <Row key={item.img} wrap={true} gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 24]} >
              <Col className="gutter-row" span={6}>
                <img className={styles.img} src={`/development/${item.img}.svg`} alt={item.img} />
              </Col>
              <Col className="gutter-row" span={18}>
                <Typography.Title level={4}>{item.title}</Typography.Title>
                <Space direction="vertical">
                  {item.text.map(item => {
                    return <Typography.Text key={item}>{item}</Typography.Text>
                  })}
                </Space>
              </Col>
            </Row>
          </Col>
        )
      })}
    </Row>
  )
}

export default DevelopmentBlockItem;