var $ = require('jquery');
var Backbone = require('backbone');

var Carousel = Backbone.View.extend({
  initialize: function() {
    this.currentItems = [];
    this.animationRunning = false;
    this.currentGroup = 0;
    this.totalGroups = this.model.models.length;
    this.updateButtonState();
    this.render();
  },

  events: {
    'click #previous': 'previous',
    'click #next': 'next',
  },

  next: function() {
    if (this.animationRunning) {
      return;
    }

    this.currentGroup += 4;
    this.updateButtonState();
    this.randomizeImages();
    this.animationRunning = true;

    $('.item-container').animate({ marginLeft: '-=840px'}, 500, () => {
      this.animationRunning = false;
    });
  },

  previous: function() {
    if (this.animationRunning) {
      return;
    }

    this.currentGroup -= 4;
    this.updateButtonState();
    this.randomizeImages();
    this.animationRunning = true;

    $('.item-container').animate({ marginLeft: '+=840px' }, 500, () => {
      this.animationRunning = false;
    });
  },

  updateButtonState: function() {
    $('#next').prop('disabled', false);
    $('#previous').prop('disabled', false);

    if (this.currentGroup === 0) {
      $('#previous').prop('disabled', true);
    }

    if (this.currentGroup === this.totalGroups - 1) {
      $('#next').prop('disabled', true);
    }
  },

  randomizeImages: function() {
    // randomizing the images in the blocks which will be displayed next

    var images = $('.slide-item').toArray();
    var max = this.currentGroup + 4;

    if (max > this.totalGroups) {
      max = this.totalGroups;
    }

    for (var i = this.currentGroup; i < max; i++) {
      var k = Math.floor(Math.random() * this.model.models[i].attributes.images.length);
      var imageUrl = this.model.models[i].attributes.images[k];
      $(images[i]).css('background-image', `url('${imageUrl}')`);
    }
  },

  render: function() {
    $('.item-container').html('');

    this.model.models.forEach(function (m) {
      $('.item-container').append(`<li class="slide-item" ></li>`);
    });

    this.randomizeImages();

    return this;
  }
});

module.exports = Carousel;
