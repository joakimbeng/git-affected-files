'use strict';
const test = require('ava');
const gitAffectedFiles = require('../src');

const FIRST_COMMIT_HASH = '6ba8b08';

test('affected files for specific commit', async t => {
	const files = await gitAffectedFiles(FIRST_COMMIT_HASH);
	t.is(files.length, 6);
	t.deepEqual(files.map(({filename}) => filename), [
		'.editorconfig',
		'.gitignore',
		'.travis.yml',
		'package.json',
		'src/index.js',
		'test/test.js'
	]);
	t.deepEqual(files.map(({status}) => status), ['A', 'A', 'A', 'A', 'A', 'A']);
});
