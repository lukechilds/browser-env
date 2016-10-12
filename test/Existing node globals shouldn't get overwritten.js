import test from 'ava';
import browserEnv from '../src';

test(t => {
  const origConsole = console;
  browserEnv();
  t.is(origConsole, console);
});
