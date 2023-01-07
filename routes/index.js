const routes = require('express').Router();
const path = require('path');
const views_path = path.join(__dirname, '../');

routes.get('/', function(req, res) {
  res.sendFile(path.join(views_path, 'views/index.html'));
});

routes.get('/test', function(req, res) {
  res.sendFile(path.join(views_path, 'views/test.html'));
  // res.send('test .send() after sending file');
});



module.exports = routes;
