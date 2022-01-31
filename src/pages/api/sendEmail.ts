import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

export default function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  let transporter = nodemailer.createTransporter({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "",
      password: "",
    },
  });

  transporter
    .sendMail({
      from: '"Orçamento" <tucan.developers@gmail.com>',
      to: "tucan.developers@gmail.com",
      replyTo: req.body.email,
      subject: "Orçamento pelo site ✔",
      text: "Hello world?",
      html: "<b>Hello world, teste orçamento</b>",
    })
    .then((response: any) => {
      res.send(response);
    })
    .catch((err: any) => {
      res.send(err);
    });
}
