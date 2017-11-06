var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  var contents = fs.readFileSync('./src/index.html', 'utf8');
  res.send(contents);
});

app.listen(3000, function() {
  console.log('Started successfully, open localhost:3000.');
});
