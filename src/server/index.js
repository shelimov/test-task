var express = require('express');
var app = express();
app.use('/static', express.static('./build'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Test task',
    stylefile: '/static/style.css',
    scriptfile: '/static/script.js'
  });
});
// handle 404
app.use(function(req, res) {
  res.status(404).send('File not found');
});
app.listen(3000, function() {
  console.log('Server started: http://localhost:3000');
});
