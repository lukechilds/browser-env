import test from 'ava';
import expectedProperties from './fixtures/expectedProperties';
import browserEnv from '../src';

test(t => {
  browserEnv();
  const properties = Object.getOwnPropertyNames(window);
  const order = (a, b) => a > b;
  t.deepEqual(properties.sort(order), expectedProperties.sort(order));
});
