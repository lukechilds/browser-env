import test from 'ava';
import browserEnv from '../src';

test('Function should return window instance', t => {
	const returnValue = browserEnv();
	t.is(returnValue, window);
});
