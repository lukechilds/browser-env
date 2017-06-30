import test from 'ava';
import browserEnv from '../src';
import expectedProperties from './fixtures/expectedProperties';

test(t => {
	browserEnv();
	const properties = Object.getOwnPropertyNames(window);
	t.is(properties.length, expectedProperties.length);
	properties.forEach(prop => t.true(expectedProperties.indexOf(prop) > -1));
});
