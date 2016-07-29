import { jsdom } from 'jsdom';

function getWindowPropertyKeys(window) {
  return Object
    .keys(window)
    .concat(Object.keys(window._core))
    .filter(prop => prop.substring(0, 1) !== '_');
}

const protectedproperties = (() => {
  const window = jsdom('<html><body></body></html>').defaultView;

  return getWindowPropertyKeys(window)
    .filter(prop => global[prop]);
})();

const getType = val => Object.prototype.toString.call(val);

module.exports = (...args) => {
  const properties = args.filter(arg => getType(arg) === '[object Array]')[0];
  const jsdomConfig = args.filter(arg => getType(arg) === '[object Object]')[0];

  const window = jsdom('<html><body></body></html>', jsdomConfig).defaultView;

  getWindowPropertyKeys(window)
    .filter(prop => protectedproperties.indexOf(prop) === -1)
    .filter(prop => !(properties && properties.indexOf(prop) === -1))
    .forEach(prop => global[prop] = window[prop]);

  return window;
};
