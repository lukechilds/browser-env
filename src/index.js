import { jsdom } from 'jsdom';

module.exports = arg => {
  const properties = arg instanceof Array ? arg : arg && arg.properties;
  const overwrite = arg && arg.overwrite;
  const window = jsdom('<html><body></body></html>').defaultView;

  Object
    .keys(window)
    .filter(prop => typeof global[prop] === 'undefined' || properties && overwrite)
    .filter(prop => !(properties && properties.indexOf(prop) === -1))
    .forEach(prop => global[prop] = window[prop]);

  return window;
};
