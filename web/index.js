var express = require('express');
var morgan = require('morgan');
var app = express();
    env = process.env.NODE_ENV;
app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000, env '+ env);
});
