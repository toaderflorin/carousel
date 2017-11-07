var $ = require('jquery');
var Backbone = require('backbone');

var App = Backbone.View.extend({
  initialize: function() {
    this.currentItems = [];
    this.render();
  },

  events: {
    'click .next': 'next',
    'click .previous': 'previous'
  },

  next: function() {
     $('.slide').animate({ marginLeft: '-=240px' }, 500);
  },

  previous: function() {
    $('.slide').animate({ marginLeft: '+=240px' }, 500);
  },

  render: function() {
    return this;
  }
});

module.exports = App;
