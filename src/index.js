global.window = require('jsdom').jsdom('<html><body></body></html>').defaultView;
Object.keys(window).forEach(function(prop) {
  if(!global[prop]) {
    global[prop] = window[prop];
  }
});

module.exports = window;
