import * as express from 'express';
import * as nodemailer from 'nodemailer';
import * as functions from 'firebase-functions';
import { EnvironmentVariables } from '../../models/environment-variables';

export const sendMail = async (req: express.Request, res: express.Response) => {
  try {
    const {
      senderName,
      senderEmail,
      message,
    }: { senderName: string; senderEmail: string; message: string } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 587,
      secure: false,
      auth: {
        user: (functions.config() as EnvironmentVariables).nodemailer.user,
        pass: (functions.config() as EnvironmentVariables).nodemailer.password,
      },
    });

    const emailBody = `
    <h1>
      Kontaktformular
    </h1>
    <p>
      Name: ${senderName}<br>
      Email: ${senderEmail}
    </p>
    <p>
      Nachricht:<br>
      ${message}
    </p>
    `;

    const info = await transporter.sendMail({
      from: '"No Reply" <no-reply@tomke-nils.de>',
      to: 'kontakt@tomke-nils.de',
      subject: 'Neue Kontaktformular-Nachricht',
      text: emailBody,
      html: emailBody,
    });

    res.status(200).send(info);
  } catch (err) {
    res.status(500).send(err);
  }
};
