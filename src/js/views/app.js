var Backbone = require('backbone');
var $ = require('jquery');

var App = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    $('#app').text('Some text');
    return this;
  },
});

module.exports = App;
