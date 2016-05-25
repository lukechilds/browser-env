import { jsdom } from 'jsdom';

module.exports = (props) => {
  const window = jsdom('<html><body></body></html>').defaultView;

  Object.keys(window).forEach(prop => {
    if(typeof global[prop] === 'undefined') {
      if(props instanceof Array && props.indexOf(prop) === -1) {
        return;
      }
      global[prop] = window[prop];
    }
  });

  return window;
};
