import test from 'ava';
import browserEnv from '../src';

test(t => {
  t.not(browserEnv(), browserEnv());
});
