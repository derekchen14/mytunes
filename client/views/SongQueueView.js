// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({
  tagName: "div",

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  render: function() {
    // this.$el.children().detach();

    this.$el.html('<h4>Song Queue</h4>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render();
      })
    );
  }

});