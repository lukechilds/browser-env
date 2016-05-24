var jsdom = require('jsdom').jsdom;

module.exports = function() {
  global.window = jsdom('<html><body></body></html>').defaultView;
  
  Object.keys(window).forEach(function(prop) {
    if(typeof global[prop] === 'undefined') {
      global[prop] = window[prop];
    }
  });

  return window;
};
