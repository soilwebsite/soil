const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'zoho',
    auth: {
      user: 'maneesha@baikhal.com',
      pass: process.env.REACT_APP_EMAIL_PW
    }
});

let mailOptions = {
    from: '"Maneesha W" <maneesha@baikhal.com>', // sender address
    to: 'maneesha.wijesinghe1@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'I love you', // plain text body
    html: '<b>I love you</b>' // html body
};

// un-comment this to send an email:

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
// });
