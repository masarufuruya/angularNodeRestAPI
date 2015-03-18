'use strict'
var express = require('express');

var app = express();

// ルーティング設定を外部ファイルへ分割
require('./router.js')(app);

app.listen(3000);
