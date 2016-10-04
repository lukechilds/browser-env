# browser-env [![Build Status](https://travis-ci.org/lukechilds/browser-env.svg?branch=master)](https://travis-ci.org/lukechilds/browser-env) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/browser-env/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/browser-env?branch=master)

Simulates a global browser environment using [`jsdom`](https://github.com/tmpvar/jsdom).

This allows you to run browser modules in node with minimal or no effort. Can also be used to test browser modules with any node test framework. Please note, only the DOM is simulated, if you want to run a module that requires more advanced browser features (like `localStorage`), you'll need to polyfill that seperately.

> ❗️**Warning**
>
> This module adds a lot of stuff to the global namespace, use with care.

## Install

```shell
npm install --save browser-env
```

## Usage

```js
// Init
require('browser-env')();

// Now you have access to a browser like environment in node:

typeof window;
// 'object'

typeof document;
// 'object'

var div = document.createElement('div');
// HTMLDivElement

div instanceof HTMLElement
// true
```

By default everything in the `jsdom` window namespace is tacked on to the node global namespace (excluding existing node properties e.g `console`, `setTimout`). If you want to trim this down you can pass an array of required properties:

```js
// Init
require('browser-env')(['window']);

typeof window;
// 'object'

typeof document;
// 'undefined'
```

You can also pass a config object straight through to `jsdom`. This can be done with or without specifying required properties.

```js
require('browser-env')(['window'], { userAgent: 'My User Agent' });

// or

require('browser-env')({ userAgent: 'My User Agent' });
```

You can of course also assign to a function:

```js
var browserEnv = require('browser-env');
browserEnv();

// or

import browserEnv from 'browser-env';
browserEnv();
```

## License

MIT © Luke Childs
