// var uri = 'https://api.github.com/repositories';
require('isomorphic-fetch');
var Promise = require('bluebird');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/echeleon');

var RepositorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  author: String,
  type: Number
});
var Rep = mongoose.model('Repository', RepositorySchema);

var uri = 'https://api.github.com/repositories';
var count = 0;
function get() {
  fetch(uri).then(res => {
    uri = res.headers.get('link').split(';')[0].slice(1,-1); // get next page
    return res.json();
  }).then(response => response).then(json => {
    var l = json.length;
    var el;
    count += l;
    for (var i = 0; i < l; i++) {
      el = json[i];
      new Rep({
        id: parseInt(el.id),
        name: el.name,
        author: el.owner.login,
        type: 0
      }).save(err => console.log(err));
    }
  }).then(() => {
    if (count < 1000)
      setTimeout(() => get(), 1000);
  });
}
get();