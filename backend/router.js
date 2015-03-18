'use strict'
module.exports = function(app) {
  // バックエンドをNodeでアクセスを受ける
  app.get('/backend', function(req, res) {
    res.send('Hello world');
  });
};
