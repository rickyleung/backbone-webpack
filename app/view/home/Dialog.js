var dialogTpl = require('../../../asset/tpl/dialog.html');

var Dialog = Backbone.View.extend({
    initialize: function() {
        var view = this;
        $(dialogTpl()).appendTo('body').bizDialog({
            destroyOnClose: true,
            width: 400,
            height: 500,
            buttons: [
                {
                    text: 'OK',
                    icon: 'done',
                    onClick: function() {
                        this.close();
                    }
                }
            ]
        }).bizDialog('open');

        this.render();
    },

    render: function() {
        $('#fruit').bizSelect({
            inheritOriginalWidth: true
        }).on('change', function(e) {
            bizui.alert($(this).val());
        });

        $('.date').bizInput().bizCalendar({
            daysOfWeekHighlighted: '06',
            todayBtn: true,
            todayHighlight: true
        });
    },

    destroy: function() {
        $('#fruit').bizSelect('destroy');
        $('.date').bizInput('destroy').bizCalendar('destroy');
    }
});

module.exports = Dialog;
