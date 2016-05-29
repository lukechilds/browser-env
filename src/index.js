import { jsdom } from 'jsdom';

module.exports = (props, overwrite) => {
  const presetProps = props instanceof Array ? props : false;
  const window = jsdom('<html><body></body></html>').defaultView;

  Object
    .keys(window)
    .filter(prop => typeof global[prop] === 'undefined' || presetProps && overwrite)
    .filter(prop => !(presetProps && props.indexOf(prop) === -1))
    .forEach(prop => global[prop] = window[prop]);

  return window;
};
