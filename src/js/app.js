var $ = require('jquery');
var Backbone = require('backbone');
var App = require('./views/app');
var BlockList = require('./models/blockList');

$(function() {
  var blockList = new BlockList();
  blockList.fetch({
    success: function() {
      var app = new App({ el: $('#app'), model: blockList });
      app.initialize();
    }
  });
});
