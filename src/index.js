global.window = require('jsdom').jsdom('<html><body></body></html>').defaultView;
Object.keys(window).forEach(function(prop) {
  if(typeof global[prop] === 'undefined') {
    global[prop] = window[prop];
  }
});

module.exports = window;
