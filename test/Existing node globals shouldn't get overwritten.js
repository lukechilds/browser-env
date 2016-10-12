import test from 'ava';
import browserEnv from '../dist';

test(t => {
  const origConsole = console;
  browserEnv();
  t.is(origConsole, console);
});
