var Backbone = require('backbone');
var Block = require('./block');

var BlockList = Backbone.Collection.extend({
  model: Block,
  url: '/api/blocks'
});

module.exports = BlockList;
