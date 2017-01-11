'use strict';
const execa = require('execa');

module.exports = exports = function (hash, options) {
	const args = ['show', '--name-status', '--oneline', '--pretty=format:'];

	if (typeof hash === 'string') {
		args.push(hash);
	} else if (typeof hash === 'object') {
		options = hash;
	}

	return execa('git', args, options)
		.then(({stdout}) => filesFromStdout(stdout));
};

function filesFromStdout(stdout) {
	return stdout.trim().split('\n').map(parseLine);
}

function parseLine(statusAndName) {
	const status = statusAndName.slice(0, 2).trim();
	const filename = statusAndName.slice(2).trim();
	return {status, filename};
}
