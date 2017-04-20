var Dialog = require('./Dialog');

var Home = Backbone.View.extend({
    el: '.container',
    render: function() {
        this.$el.html('<button>Dialog</button>');
        this.$('button').bizButton({
            theme: 'green'
        }).click(function() {
            new Dialog();
        });
    },

    destroy: function() {
        this.$('button').bizButton('destroy').unbind();
        this.$el.empty();
    }
});

module.exports = Home;
