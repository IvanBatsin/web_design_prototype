import { Input } from 'antd';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Modal from 'antd/lib/modal/Modal';
import Typography from 'antd/lib/typography';
import React from 'react';
import styles from './styles.module.css';

interface FeedbackProps {
  feedbackRef: React.RefObject<HTMLDivElement>
}

const Feedback: React.FC<FeedbackProps> = ({feedbackRef}) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values: any): Promise<void> => {
    try {
      const req = await window.fetch('/api/mail', {
        body: JSON.stringify(values),
        method: 'POST',
        headers: {
          'Content-Type': 'application',
          'Accept': 'application/json'
        }
      });
      const res = await req.json() as {error: boolean};
      setIsModalVisible(true);
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout}></div>
      <div className={styles.content} ref={feedbackRef}>
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
      <Modal title="Заказ получен" visible={isModalVisible} onOk={handleCancel} onCancel={handleCancel}>
        <p>Мы получили ваш заказ, через в течение 10 минут мы свяжемся с вами</p>
      </Modal>
    </div>
  )
}

export default Feedback;