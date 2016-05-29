# node-browser-environment [![Build Status](https://travis-ci.org/lukechilds/node-browser-environment.svg?branch=master)](https://travis-ci.org/lukechilds/node-browser-environment) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/node-browser-environment/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/node-browser-environment?branch=master)

Simulates a global browser environment using [`jsdom`](https://github.com/tmpvar/jsdom).

This allows you to run browser modules in node with minimal or no effort. Can also be used to test browser modules with any node test framework. Please note, only the DOM is simulated, if you want to run a module that requires more advanced browser features (like `localStorage`), you'll need to polyfill that seperately.

> ❗️**Warning**
>
> This module adds a lot of stuff to the global namespace, use with care.

## Install

```shell
npm install --save node-browser-environment
```

## Usage

```js
// Init
require('node-browser-environment')();

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

By default everything in the `jsdom` window namespace is tacked on to the node global namespace. If you want to trim this down you can pass an array of required properties:

```js
// Init
require('node-browser-environment')(['window']);

typeof window;
// 'object'

typeof document;
// 'undefined'
```

`node-browser-environment` checks if global properties already exist before setting them. This is to stop core node methods being overwritten such as `console`. If you want to force an overwrite of properties you can set the overwrite argument to true. This can only be done along with an array of properties:

```js
// Won't overwrite window if it already exists
require('node-browser-environment')(['window']);

// Will overwrite window if it already exists
require('node-browser-environment')(['window'], true);
```

You can of course also assign to a function:

```js
var browserEnv = require('node-browser-environment');
browserEnv();

// or

import browserEnv from 'node-browser-environment';
browserEnv();
```

## License

MIT © Luke Childs
