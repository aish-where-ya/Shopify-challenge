const express = require('express');
const config = require('./config/local.json');
const routes = require('./routes/routes.js')
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodburl = process.env.MONGO_URL || config.mongodb.url;
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
        await mongoose.connect(mongodburl, {
            useNewUrlParser: true,
        });
        console.log('Successfully Connected to the Mongodb at ' + mongodburl);
        // await http.createServer(app).listen(config.server.port, config.server.host);
        // console.log('Express server listening on port ' + config.server.port);
    } catch (e) {
        console.log(e);
    }
}

module.exports = app;