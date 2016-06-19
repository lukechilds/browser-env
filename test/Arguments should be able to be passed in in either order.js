import test from 'ava';
import browserEnv from '../dist';

test(t => {
  t.is(typeof navigator, 'undefined');
  const returnValue = browserEnv(['navigator'], { userAgent: 'first' });
  t.is(navigator.userAgent, 'first');
  const secondReturnValue = browserEnv({ userAgent: 'second' }, ['navigator']);
  t.is(navigator.userAgent, 'second');
});
