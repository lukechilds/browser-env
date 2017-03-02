import test from 'ava';
import expectedProperties from './fixtures/expectedProperties';
import browserEnv from '../src';

test(t => {
  browserEnv();
  const properties = Object.getOwnPropertyNames(window);
  t.is(properties.length, expectedProperties.length);
  properties.forEach(prop => t.true(expectedProperties.indexOf(prop) > -1));
});
