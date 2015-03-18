'use strict';

var express = require('express');

// アクセスをさばくようにコントローラーへ分割
var controller = require('./users.controller');

var router = express.Router();

router.get('/show', controller.show);

module.exports = router;
