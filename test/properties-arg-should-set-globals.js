import test from 'ava';
import browserEnv from '../src';

test('Properties arg should set globals', t => {
	t.is(typeof window, 'undefined');
	t.is(typeof document, 'undefined');
	t.is(typeof navigator, 'undefined');
	t.is(typeof HTMLElement, 'undefined');
	browserEnv([]);
	t.is(typeof window, 'undefined');
	t.is(typeof document, 'undefined');
	t.is(typeof navigator, 'undefined');
	t.is(typeof HTMLElement, 'undefined');
	browserEnv(['navigator', 'HTMLElement']);
	t.is(typeof window, 'undefined');
	t.is(typeof document, 'undefined');
	t.not(typeof navigator, 'undefined');
	t.not(typeof HTMLElement, 'undefined');
});
