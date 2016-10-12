import test from 'ava';
import browserEnv from '../src';

test(t => {
  t.is(typeof window, 'undefined');
  const returnValue = browserEnv();
  t.is(returnValue, window);
  const secondReturnValue = browserEnv();
  t.not(returnValue, window);
  t.is(secondReturnValue, window);
});
