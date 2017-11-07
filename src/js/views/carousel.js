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
    'click .previous': 'previous',
    'click .next': 'next',
  },

  next: function() {
    if (this.animationRunning) {
      return;
    }

    this.currentGroup++;
    this.updateButtonState();
    this.animationRunning = true;
    $('.item-container').animate({ marginLeft: '-=840px'}, 500, () => {
      this.animationRunning = false;
    });
  },

  previous: function() {
    if (this.animationRunning) {
      return;
    }

    this.currentGroup--;
    this.updateButtonState();
    this.animationRunning = true;
    $('.item-container').animate({ marginLeft: '+=840px' }, 500, () => {
      this.animationRunning = false;
    });
  },

  updateButtonState: function() {
    $( ".next" ).prop( "disabled", false );
    $( ".previous" ).prop( "disabled", false );

    if (this.currentGroup === 0) {
      $( ".previous" ).prop( "disabled", true );
    }

    if (this.currentGroup === this.totalGroups - 1) {
      $( ".next" ).prop( "disabled", true );
    }
  },

  render: function() {
    $('.item-container').html('');

    this.model.models.forEach(function (m) {
      m.attributes.images.forEach(function (m2) {
        $('.item-container').append(`<li class="slide-item" style="background-image: url('${m2}');"></li>`);
      });
    });

    return this;
  }
});

module.exports = Carousel;
