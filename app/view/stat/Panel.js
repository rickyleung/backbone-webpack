var panelTpl = require('../../../asset/tpl/panel.html');

var Panel = Backbone.View.extend({
    initialize: function() {
        var view = this;
        $(panelTpl()).appendTo('body').bizPanel({
            destroyOnClose: true,
            buttons: [
                {
                    text: 'OK',
                    icon: 'done',
                    onClick: function() {
                        view.destroy();
                        this.close();
                    }
                },
                {
                    text: 'Cancel',
                    icon: 'close',
                    theme: 'gray',
                    onClick: function() {
                        view.destroy();
                        this.close();
                    }
                }
            ]
        }).bizPanel('open');

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

module.exports = Panel;
