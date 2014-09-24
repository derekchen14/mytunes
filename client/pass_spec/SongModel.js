// Song.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  playcount: 0,
  vote: 0,
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.playcount++;
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  upvote: function(){
    this.vote++;
    this.trigger('upvote', this);
  },
  downvote: function(){
    this.vote--;
    this.trigger('downvote', this);
  },
  ended: function(){
    this.trigger('ended', this);
  }


});