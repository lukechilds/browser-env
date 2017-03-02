import test from 'ava';
import expectedProperties from './fixtures/expectedProperties';
import browserEnv from '../src';

test(t => {
  browserEnv();
  const properties = Object.getOwnPropertyNames(window);
  t.deepEqual(properties, expectedProperties);
});
