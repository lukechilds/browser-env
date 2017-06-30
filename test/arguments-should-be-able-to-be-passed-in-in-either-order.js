import test from 'ava';
import browserEnv from '../src';

test(t => {
	t.is(typeof navigator, 'undefined');
	browserEnv(['navigator'], { userAgent: 'first' });
	t.is(navigator.userAgent, 'first');
	browserEnv({ userAgent: 'second' }, ['navigator']);
	t.is(navigator.userAgent, 'second');
});
