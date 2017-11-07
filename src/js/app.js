var $ = require('jquery');
var Backbone = require('backbone');
var Carousel = require('./views/carousel');
var BlockList = require('./models/blockList');

$(function() {
  var blockList = new BlockList();
  blockList.fetch({
    success: function() {
      var app = new Carousel({ el: $('#app'), model: blockList });
      app.initialize();
    }
  });
});
