import { Input } from 'antd';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Typography from 'antd/lib/typography';
import React from 'react';
import styles from './styles.module.css';

const Feedback: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout}></div>
      <div className={styles.content}>
        <Form
          name="normal_login"
          className={styles.form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Typography.Title level={3}>Заказать проект</Typography.Title>
          <Form.Item
            className={styles.form_item}
            name="username"
            rules={[{ required: true, message: 'Введите Ваше имя' }]}
          >
            <Input placeholder='Имя'/>
          </Form.Item>

          <Form.Item
            className={styles.form_item}
            name="email"
            rules={[{ required: true, message: 'Введите Вашу email' }]}
          >
            <Input placeholder='Email'/>
          </Form.Item>

          <Form.Item
            className={styles.form_item}
            name="phone"
            rules={[{ required: true, message: 'Введите Ваш телефон', pattern: /^(\+7|8)9\d{9}$/ }]}
          >
            <Input type='tel' placeholder='8 999 999 99 99'/>
          </Form.Item>

          <Form.Item
            className={styles.form_item}
            name="task"
            rules={[{ required: true, message: 'Опишите Вашу задачу' }]}
          >
            <Input.TextArea  placeholder='Опишите Вашу задачу'></Input.TextArea>
          </Form.Item>

          <Form.Item className={styles.form_item}>
            <Button type="primary" htmlType="submit" className={styles.btn}>
              Обсудить проект
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Feedback;