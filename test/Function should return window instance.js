import test from 'ava';
import browserEnv from '../src';

test(t => {
  const returnValue = browserEnv();
  t.is(returnValue, window);
});
