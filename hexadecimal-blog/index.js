// Author: Ben Hays <benhays42@hexadecimal.blog>
// This file is licensed under the MIT license

// ABOUT:
// This file is the entry point for the blog
// It initializes the express middleware and imports the routes from routes.js
// It also initializes the mongodb middleware and imports

// NPM imports
const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const path = require('path');

// Local Imports
const config = require('./config');
const logger = require('./logger');

// Initialize the express app and configure the view engine
const app = express();
app.set('view engine', 'ejs');


// Middleware
app.use(compression());
app.use(express.static(path.join(__dirname, 'static')));

// Import routes
require('./routes')(app);

const server = app.listen(config.PORT, function() {
    logger.debug('HTTP server listening on port ' + config.PORT);
});

// Graceful shutdown checks
process.on('SIGTERM', () => {
    logger.debug('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      logger.debug('HTTP server closed')
    })
  });

process.on('SIGINT', () => {
    logger.debug('SIGINT signal received: closing HTTP server')
    server.close(() => {
      logger.debug('HTTP server closed')
    })
});