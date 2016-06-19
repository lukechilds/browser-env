import { jsdom } from 'jsdom';

const protectedproperties = (() => {
  const window = jsdom('<html><body></body></html>').defaultView;

  return Object
    .keys(window)
    .filter(prop => global[prop]);
})();

module.exports = (properties = false, jsdomConfig = {}) => {
  const window = jsdom('<html><body></body></html>', jsdomConfig).defaultView;

  Object
    .keys(window)
    .filter(prop => protectedproperties.indexOf(prop) === -1)
    .filter(prop => !(properties && properties.indexOf(prop) === -1))
    .forEach(prop => global[prop] = window[prop]);

  return window;
};
