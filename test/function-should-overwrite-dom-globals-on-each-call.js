import test from 'ava';
import browserEnv from '../src';

test('Function should overwrite DOM globals on each call', t => {
	t.is(typeof window, 'undefined');
	const returnValue = browserEnv();
	t.is(returnValue, window);
	const secondReturnValue = browserEnv();
	t.not(returnValue, window);
	t.is(secondReturnValue, window);
});
