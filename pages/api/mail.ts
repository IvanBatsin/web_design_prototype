import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from '../../core/nodemailer';

interface Payload {
  email: string,
  name: string,
  phone: string,
  task: string
}

type Data = {
  error: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.body) {
      const info: Payload = JSON.parse(req.body);
      await transporter.sendMail({
        subject: 'Новый Заказ',
        from: 'CDesign',
        to: 'ltd1584@gmail.com',
        text: req.body.task,
        html: 
          `
            <div>
              <h1>Заказ сделан</h1>
              <p>Имя - ${info.name}</p>
              <p>Почта - ${info.email}</p>
              <p>Телефон - ${info.phone}</p>
              <p>Задача - ${info.task}</p>
            </div>
          ` 
      });
      res.status(200).json({error: false});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: true});
  }
}
