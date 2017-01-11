'use strict';
const execa = require('execa');

module.exports = exports = function gitAffectedFiles(hash, options) {
	return execa('git', ['show', '--name-status', '--oneline', '--pretty=format:', hash || ''], options)
		.then(({stdout}) => filesFromStdout(stdout));
};

function filesFromStdout(stdout) {
	return stdout.split('\n').map(parseLine);
}

function parseLine(statusAndName) {
	const status = statusAndName.slice(0, 2).trim();
	const filename = statusAndName.slice(2).trim();
	return {status, filename};
}
