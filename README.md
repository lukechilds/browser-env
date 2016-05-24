# node-browser-environment [![Build Status](https://travis-ci.org/lukechilds/node-browser-environment.svg?branch=master)](https://travis-ci.org/lukechilds/node-browser-environment) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/node-browser-environment/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/node-browser-environment?branch=master)

Simulates a global browser environment using [`jsdom`](https://github.com/tmpvar/jsdom).

This allows you to run browser modules in node with minimal or no effort. Can also be used to test browser modules with any node test framework. Please note, only the DOM is simulated, if you want to run a module that requires more advanced browser features (like `localStorage`), you'll need to polyfill that seperately.

> ❗️**Warning**
>
> This module adds a lot of stuff to the global namepace, use with care.

## Install

```shell
npm install --save node-browser-environment
```

## Usage

```js
// Setup global browser environment
require('node-browser-environment')();

// or if you're using ES6 modules
import browserEnv from 'node-browser-environment';
browserEnv();

// Now you have access to a browser like environment:

typeof document;
// 'object'

typeof window;
// 'object'

var div = document.createElement('div');
// HTMLDivElement

div instanceof HTMLElement
// true

```

## License

MIT © Luke Childs
