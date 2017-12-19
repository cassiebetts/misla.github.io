// server.js
require('dotenv').config();
const compression = require('compression');
const fs = require('fs');
const cheerio = require('cheerio');
const express = require('express');
const path = require('path');
const app = express();
const httpServer = app.listen(process.env.PORT || 8080);
const _build_dir = `${__dirname}/build/`;


app.set('httpServer', httpServer);
app.use(compression());


app
    .use(express.static(_build_dir))
    .get('*', function(req, res){
        console.log('non-cached route hit', `${req.protocol}://${req.headers.host}${req.originalUrl}`);
        const $html = cheerio.load(fs.readFileSync(path.join(_build_dir, 'index.html')));
        res.set('Content-Type', 'text/html');
        res.send($html.html());
        res.end();
    });