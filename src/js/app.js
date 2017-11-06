var Backbone = require('backbone');
var App = require('./views/app');
var $ = require('jquery');

$(function() {
  var app = new App();
  app.initialize();
});
