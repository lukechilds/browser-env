import test from 'ava';
import browserEnv from '../src';
import expectedProperties from './fixtures/expectedProperties';

test('Window properties should be as expected', t => {
	browserEnv();
	const properties = Object.getOwnPropertyNames(window);
	t.deepEqual(expectedProperties.sort(), properties.sort());
});
