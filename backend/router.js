'use strict'
module.exports = function(app) {
  // 機能毎にルーティングを分ける
  // 参考URL: http://expressjs.com/api.html
  app.use('/backend/users', require('./users'));
};
