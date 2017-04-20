var Component = require('../../dep/Component');
var Panel = require('./Panel');

var Stat = Backbone.View.extend({
    el: '.container',
    render: function() {
        this.$el.html('<button>Panel</button>');
        this.$('button').bizButton().click(function() {
            new Panel();
        });
    },

    destroy: function() {
        this.$('button').bizButton('destroy').unbind();
        this.$el.empty();
    }
});

module.exports = Stat;
