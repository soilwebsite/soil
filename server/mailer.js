const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'zoho',
    auth: {
        user: 'maneesha@baikhal.com',
        pass: process.env.REACT_APP_EMAIL_PW
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Maneesha W" <maneesha@baikhal.com>', // sender address
    to: 'jnelks@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Message %s sent: %s', info.messageId, info.response);
// });
