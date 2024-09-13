// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
  console.log('Server started on port 3000');
});

// Create a new array to store comments
var comments = [];

// Create a new route that will return all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Create a new route that will add a new comment to the array
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Create a new route that will delete all comments
app.delete('/comments', function(req, res) {
  comments = [];
  res.json(comments);
});

// Create a new route that will return a single comment
app.get('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = comments[id];
  res.json(comment);
});

// Create a new route that will update a single comment
app.put('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = req.body;
  comments[id] = comment;
  res.json(comment);
});

// Create a new route that will delete a single comment
app.delete('/comments/:id', function(req, res) {
  var id = req.params.id;
  comments.splice(id, 1);
  res.json(comments);
});