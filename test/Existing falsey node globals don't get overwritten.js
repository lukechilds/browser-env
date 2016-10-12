import test from 'ava';

// We have to require() here as imports have to be top level so we can't set
// globals first
test(t => {
  global.document = false;
  require('../dist')();
  t.is(document, false);
});
