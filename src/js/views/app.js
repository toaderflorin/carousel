var $ = require('jquery');
var Backbone = require('backbone');

var App = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click .next': 'next',
    'click .previous': 'previous'
  },

  next: function() {
    alert('next');
  },

  previous: function() {
    alert('previous');
  },

  render: function() {
    var text = '';

    this.model.models.forEach(function(f) {
      console.log(f);
    });

    // this.$el.html('asdasd');
    return this;
  },
});

module.exports = App;
