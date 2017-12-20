// server.js
require('dotenv').config();
const compression = require('compression');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const _ = require('lodash');
const app = express();
const httpServer = app.listen(process.env.PORT || 8080);
const _build_dir = `${__dirname}/build`;
const nodemailer = require('nodemailer');
const moment = require('moment');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('httpServer', httpServer);
app.use(compression());

app.use(express.static(path.resolve(_build_dir)));

app
    .post('/api/contact', function(req, res) {
        const email = 'contact.misla@gmail.com';
        const fromEmail = _.get(req.body, 'email');
        const subject = _.get(req.body, 'subject', "No Subject");
        const message = _.get(req.body, 'message', "No Message");
        const timestamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

        if(email){
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: email,
                    pass: 'Pn9RXoky31nZ'
                }
            });
            transporter.sendMail({
                from: fromEmail,
                to: email,
                subject: "New Lead from Misla.org",
                html: `
                    <p><b>Timestamp: </b> ${timestamp}</p>
                    <p><b>From: </b> ${fromEmail}</p>
                    <p><b>Subject: </b> ${subject}</p>
                    <p><b>Message: </b> ${message}</p>
                `
            }, function(error, info){});
        }

        res.send('<html><head><title>Thank You</title></tite></head><body><p>Thanks for submitting your email! Someone will contact you shortly.</p></body></html>');
        res.end();
    });
