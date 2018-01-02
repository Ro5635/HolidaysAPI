/**
 * HOLIDAYS API PROJECT
 *
 * Express application built upon the serverless framework to be deployed to serverless compute platform.
 * Built with AWS Lambda and API gateway as the target platform.
 *
 */
'use strict';

const logger = require('morgan');
const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(logger('dev'));

// Routers
const holidaysRouter = require('./Routers/holidaysRouter');
const versionRouter = require('./Routers/versionRouter');

// Routing
app.use('/holidays/', holidaysRouter);
app.use('/version/', versionRouter);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);

});

// Error handler
app.use(function(err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    if(err.status === 404){
        res.send({Error: '404 Endpoint not found'});
    } else {
        //TODO this error needs to be made more succinct before release
        res.send({Error: 'Unknown Error In Processing Request'});
    }

});


// Set up the serverless app
module.exports.handler = serverless(app);