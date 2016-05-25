import test from 'ava';
import browserEnv from '../dist';

test(t => {
  const returnValue = browserEnv();
  t.is(returnValue, window);
});
