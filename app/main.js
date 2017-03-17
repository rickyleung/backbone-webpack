require('../asset/css/app.css');

var Router = require('./router/Router');
var Util = require('./lib/Util');
var tpl = require('../asset/tpl/main.html');

$('body').prepend(tpl({
    list: [
        {url: '', name: 'Home'},
        {url: 'stat/', name: 'Stat'}
    ],
    author: 'Ricky'
}));

$('button').bizButton();

bizui.Tooltip({
    element: 'button',
    theme: 'orange',
    action: 'hover'
});

window.S = {};

S.router = new Router();

Backbone.history.start({
    root : ''
});
