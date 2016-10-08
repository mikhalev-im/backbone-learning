(function($) {

  var ListView = Backbone.View.extend({
    el: $('body'), // attach this.el to an existing element

    initialize: function() {
      // fixes loss of context for this within methods
      _.bindAll(this, 'render');

      // not all views are self renering. This one is
      this.render();
    },

    render: function() {
      $(this.el).append('<ul> <li>Hello world</li> </ul>');
    }
  });

  var listView = new ListView();

})(jQuery);
