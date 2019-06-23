
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const server = require('express')();
const mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const SiteRouter = require('./routes/router');
const cloudflare = require('cloudflare-express')
const expressip = require('express-ip');

server.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));

server.use(logger('dev'));
server.use(express.static(path.join(__dirname, '.', 'public')));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());
server.use(cloudflare.restore({ update_on_start : true }))
server.use(expressip().getIpInfoMiddleware);

server.set('views', path.join(__dirname, '.', 'views'));
server.set('view engine', 'ejs');
server.use('/', SiteRouter);

mongoose.promise = global.Promise;
mongoose.set('debug', true);

module.exports = port => new Promise(resolve => server.listen(port, () => resolve()));