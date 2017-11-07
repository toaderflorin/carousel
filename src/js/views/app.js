var $ = require('jquery');
var Backbone = require('backbone');

var App = Backbone.View.extend({
  initialize: function() {
    this.counter = 0;
    this.currentItems = [];
    this.render();
    this.animateLeft = this.animateLeft.bind(this)
    this.animateRight = this.animateRight.bind(this);
  },

  events: {
    'click .next': 'next',
    'click .previous': 'previous'
  },

  next: function() {
    $('#image-container').prepend('<div class="pic" style="opacity: 0;"></div>');
    $('.pic').css('transform', 'translateX(-200px)');

    this.counter = 0;
    setTimeout(this.animateRight, 0);
  },

  animateRight: function() {
    if (this.counter < 40) {
      var opacity = this.counter / 40;
      this.counter++;
      var transform = (-200 + this.counter * 5).toString() + 'px';

      $('.pic').css('transform', `translateX(${transform})`);
      $('.pic').first().css('opacity', opacity);
      $('.pic').last().css('opacity', 1 - opacity);

      setTimeout(this.animateRight, 7);
    }
    else {
      $('.pic').last().remove();
    }
  },

  previous: function() {
    console.log('Here');
    $('#image-container').append('<div class="pic" style="opacity: 0;"></div>');
    // $('.pic').css('transform', 'translateX(200px)');

    this.counter = 0;
    setTimeout(this.animateLeft, 0);
  },

  animateLeft: function() {
    if (this.counter < 40) {
      var opacity = this.counter / 40;
      this.counter++;
      var transform = (-this.counter * 5).toString() + 'px';
      console.log(transform);
      $('.pic').css('transform', `translateX(${transform})`);
      $('.pic').last().css('opacity', opacity);
      $('.pic').first().css('opacity', 1 - opacity);

      setTimeout(this.animateLeft, 7);
    }
    else {
      $('.pic').first().remove();
      $('.pic').css('transform', 'translateX(0px)');

    }
  },

  render: function() {
    $('#image-container').html('');
    $('#image-container').append('<div class="pic"></div>');
    $('#image-container').append('<div class="pic"></div>');
    $('#image-container').append('<div class="pic"></div>');
    $('#image-container').append('<div class="pic"></div>');

    return this;
  }
});

module.exports = App;
