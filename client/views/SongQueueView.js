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
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.html('<h4>Song Queue</h4>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render();
      })
    );
  }

});

/*
var SongQueueView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('remove', function(){
      this.render();
    }, this);
  },
  tagName: "table class='queue'",
  render: function(){
    this.$el.children().detach();

    return this.$el.html('<th>Queued</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render().el;
      })
    );
  }
});

*/