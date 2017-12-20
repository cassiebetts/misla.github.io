// server.js
require('dotenv').config();
const compression = require('compression');
const fs = require('fs');
const cheerio = require('cheerio');
const express = require('express');
const path = require('path');
const app = express();
const httpServer = app.listen(process.env.PORT || 8080);
const _build_dir = `${__dirname}/build`;
const Mailgun = require('mailgun').Mailgun;

app.set('httpServer', httpServer);
app.use(compression());

app.use(express.static(path.resolve(_build_dir)));

app
    .post('/contact', function(req, res) {
        const mailgun = new Mailgun('key-591b36ece58b76011a55318d2187379d');
        mg.sendText('web-bx9t5@mail-tester.com', ['web-bx9t5@mail-tester.com'],
            'This is the subject',
            'This is the text',
            'noreply@example.com', {},
            function(err) {
                if (err) console.log('Oh noes: ' + err);
                else     console.log('Success');
            });
        res.send('<p>Thanks for submitting your email! Someone will contact you shortly.</p>');
        res.end();
    })
    .get('*', (req, res) => {
    res.sendFile(path.resolve(_build_dir, 'index.html'));
});
