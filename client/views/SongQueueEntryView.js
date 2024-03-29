// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueEntryView = Backbone.View.extend({
  tagName: 'div',

  template: _.template('<span>(<%= artist %>)</span><span><%= title %></span>'),
  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes)).append('<span class="playcount"> PlayCount: '+ this.model.playcount + "</span> ");
  }

});


// var SongQueueEntryView = Backbone.View.extend({
//   tagName: 'tr',
//   template: Handlebars.compile($("#EntryView-template").html()),

//   events: {
//     'click': function() {
//       this.model.dequeue();
//     }
//   },

//   render: function(){
//     this.$el.html(this.template(this.model.attributes));
//     return this;
//   }
// });