import test from 'ava';
import browserEnv from '../dist';

test(t => {
  t.is(typeof window, 'undefined');
  let returnValue = browserEnv();
  t.is(returnValue, window);
  returnValue = browserEnv();
  t.not(returnValue, window);
  returnValue = browserEnv(['window'], true);
  t.is(returnValue, window);
});
