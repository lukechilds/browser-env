import test from 'ava';
import browserEnv from '../dist';

test(t => {
  const userAgent = 'Custom user agent';
  t.is(typeof navigator, 'undefined');
  browserEnv(['navigator'], { userAgent: userAgent });
  t.is(navigator.userAgent, userAgent);
});
