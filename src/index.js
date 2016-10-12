import jsdom from 'jsdom';
import clone from 'clone';

const defaultJsdomConfig = {
  features: {
    FetchExternalResources: false,
    ProcessExternalResources: false
  }
};

const createWindow = userJsdomConfig => {
  const jsdomConfig = Object.assign({}, userJsdomConfig, defaultJsdomConfig);

  return jsdom.jsdom('<html><body></body></html>', clone(jsdomConfig)).defaultView;
};

const protectedproperties = (() => Object
  .getOwnPropertyNames(createWindow())
  .filter(prop => typeof global[prop] !== 'undefined')
)();

module.exports = (...args) => {
  const properties = args.filter(arg => Array.isArray(arg))[0];
  const userJsdomConfig = args.filter(arg => !Array.isArray(arg))[0];

  const window = createWindow(userJsdomConfig);

  Object
    .getOwnPropertyNames(window)
    .filter(prop => protectedproperties.indexOf(prop) === -1)
    .filter(prop => !(properties && properties.indexOf(prop) === -1))
    .forEach(prop => global[prop] = window[prop]);

  return window;
};
