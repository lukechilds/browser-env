import { jsdom } from 'jsdom';

module.exports = () => {
  global.window = jsdom('<html><body></body></html>').defaultView;

  Object.keys(window).forEach(prop => {
    if(typeof global[prop] === 'undefined') {
      global[prop] = window[prop];
    }
  });

  return window;
};
