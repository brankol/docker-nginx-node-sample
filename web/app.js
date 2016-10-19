const express = require('express');
const morgan = require('morgan');
const app = express();
const env = app.get('env');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send(`Hello World, I'm doing ${env} here!`);
});

app.get('/health', (req, res, next) => {
    return res.json({
        healthy: true
    });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (env === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.send();
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send();
});

module.exports = app;
