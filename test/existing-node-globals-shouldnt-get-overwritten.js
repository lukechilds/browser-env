import test from 'ava';
import browserEnv from '../src';

test('Existing node globals shouldn\'t get overwritten', t => {
	const origConsole = console;
	browserEnv();
	t.is(origConsole, console);
});
