export default async function handler(req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: req.body.email,
    to: process.env.NEXT_PUBLIC_GMAIL,
    subject: req.body.subject,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  // transporter.sendMail(mailData, function (err, info) {
  //   if (err) console.log(err);
  //   else console.log(info);
  // });

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  console.log(req.body);
  res.send('success');
}
