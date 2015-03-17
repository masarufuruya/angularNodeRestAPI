'use strict'
var express = require('express');

var app = express();

// バックエンドをNodeでアクセスを受ける
app.get('/backend', function(req, res) {
  res.send('Hello world');
});

app.listen(3000);
