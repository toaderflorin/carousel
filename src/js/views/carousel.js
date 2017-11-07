var $ = require('jquery');
var Backbone = require('backbone');

var Carousel = Backbone.View.extend({
  initialize: function() {
    this.currentItems = [];
    this.animationRunning = false;
    this.render();
  },

  events: {
    'click .previous': 'previous',
    'click .next': 'next',
  },

  next: function() {
    if (this.animationRunning) {
      return;
    }

    this.animationRunning = true;
    $('.slide').animate({ marginLeft: '-=210px'}, 500, () => {
      this.animationRunning = false;
    });
  },

  previous: function() {
    if (this.animationRunning) {
      return;
    }

    this.animationRunning = true;
    $('.slide').animate({ marginLeft: '+=210px' }, 500, () => {
      this.animationRunning = false;
    });
  },

  render: function() {
    $('.slide').html('');
    $('.slide').append('<li class="slide-item" style="background-image: url(\'https://image.freepik.com/free-photo/cloudy-blue-sky_1112-236.jpg\');"></li>');
    $('.slide').append('<li class="slide-item" style="background-image: url(https://image.freepik.com/free-photo/cloudy-blue-sky_1112-236.jpg);"></li>');

    return this;
  }
});

module.exports = Carousel;
