var express = require('express');
var app = express();

app.use('/javascripts', express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));

app.listen(3000);