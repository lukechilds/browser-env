import test from 'ava';
import browserEnv from '../src';

// We have to require() here as imports have to be top level so we can't set
// globals first
test('Existing falsy node globals don\'t get overwritten', t => {
	global.document = false;
	browserEnv();
	t.is(document, false);
});
