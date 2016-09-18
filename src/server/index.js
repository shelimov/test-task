import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import api from './api';
import Promise from 'bluebird';
import Repository from './db/mongo/models/repository';

const app = express();
mongoose.connect('mongodb://localhost:27017/echeleon')
mongoose.Promise = Promise;
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Test task',
    stylefile: '/static/style.css',
    scriptfile: '/static/script.js'
  });
});

app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/../client'));
app.use('/api', api);
// handle 404
app.use((req, res) => {
  res.status(404).send('File not found');
});
app.listen(3000, () => {
  console.log('Server started: http://localhost:3000');
});
