global.window = require('jsdom').jsdom('<html><body></body></html>').defaultView;
Object.keys(window).forEach(prop => !global[prop] && (global[prop] = window[prop]));

module.exports = window;
