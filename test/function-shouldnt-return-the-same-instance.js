import test from 'ava';
import browserEnv from '../src';

test('Function shouldn\'t return the same instance', t => {
	t.not(browserEnv(), browserEnv());
});
