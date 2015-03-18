'use strict'
var express = require('express');

var app = express();

// ルーティング設定
require('./router.js')(app);

app.listen(3000);
