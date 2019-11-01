import test from 'ava';
import execa from 'execa';

test(async t => {
	const { stdout } = await execa('node', [
		'-r', '../register',
		'--eval', 'console.log(typeof window)'
	]);

	t.not(stdout, 'undefined');
});
