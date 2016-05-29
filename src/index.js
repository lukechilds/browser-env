import { jsdom } from 'jsdom';

module.exports = (props) => {
  const window = jsdom('<html><body></body></html>').defaultView;

  Object
    .keys(window)
    .filter(prop => typeof global[prop] === 'undefined')
    .filter(prop => !(props instanceof Array && props.indexOf(prop) === -1))
    .forEach(prop => global[prop] = window[prop]);

  return window;
};
