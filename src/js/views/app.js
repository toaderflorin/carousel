var Backbone = require('backbone');
var BlockList = require('../models/blockList');

var $ = require('jquery');

var App = Backbone.View.extend({
  initialize: function() {
    var blocks = new BlockList();
    blocks.fetch();
    console.log(blocks);
    this.render();
  },

  render: function() {
    $('#app').text('Some text');
    return this;
  },
});

module.exports = App;
