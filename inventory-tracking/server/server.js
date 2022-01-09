const express = require('express');
const config = require('./config/local.json');
const routes = require('./routes/routes.js')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

startServer();

async function startServer() {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../client'));
    app.use(express.static(path.join(__dirname, '../client')));
    app.use(bodyParser.json({
        limit: '100mb'
    }));
    app.use(bodyParser.urlencoded({
        limit: '100mb',
        extended: true
    }));
    app.use('/', routes);
    try {
        await mongoose.connect(config.mongodb.url, {
            useNewUrlParser: true,
        });
        console.log('Successfully Connected to the Mongodb at ' + config.mongodb.url);
        // await http.createServer(app).listen(config.server.port, config.server.host);
        // console.log('Express server listening on port ' + config.server.port);
    } catch (e) {
        console.log(e);
    }
}

module.exports = app;