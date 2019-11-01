import { spawnSync } from 'child_process';
import test from 'ava';

test(t => {
	const { stdout } = spawnSync('node', [
		'-r', '../register',
		'--eval', 'console.log(typeof window)'
	]);

	t.not(stdout.toString(), 'undefined');
});
