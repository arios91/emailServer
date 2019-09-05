const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const keys = require('./config/keys');
const express = require('express');
const cors = require('cors');
const port = 8080;


const app = express();

var corsOptions = {
  origin: function (origin, callback) {
    if (keys.whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

//body parser parses incoming requests
app.use(bodyParser.json());

app.use(cors(corsOptions));

let transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: keys.nodeMailerUser,
        pass: keys.nodeMailerPass
    },
    tls:{
        rejectUnauthorized: false
    }
});

//contactEmail, use this to send emails to contact email address
app.post('/sendEmail', (req, res) =>{
    // setup email data with unicode symbols
    let mailOptions = {
        from: req.body.originEmail, // sender address
        to: recipientEmail, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.textBody, // plain text body
        html: req.body.emailBody // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, error => {
        if (error) {
            return console.log(error);
        }
    });
    res.end();
});


app.listen(port, () => {
});