# git-affected-files

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![XO code style][codestyle-image]][codestyle-url]

> Get affected files in a git commit

## Installation

Install `git-affected-files` using [npm](https://www.npmjs.com/):

```bash
npm install --save git-affected-files
```

## Usage

### Module usage

```javascript
const gitAffectedFiles = require('git-affected-files');

// Get affected files for last commit
gitAffectedFiles()
	.then(files => {
		console.log(files);
		/*
		  [
		    {status: 'A', filename: 'a/new/file'},
		    {status: 'M', filename: 'a/modified/file'},
		    {status: 'D', filename: 'a/deleted/file'},
		  ]
		*/
	});
	
// Get affected files for specific commit:
gitAffectedFiles('6ba8b08')
	.then(files => {
		console.log(files);
		/*
		  [
		    {status: 'A', filename: '.editorconfig'},
		    {status: 'A', filename: '.gitignore'},
		    ...
		  ]
		*/
	});
```

## API

### `gitAffectedFiles([hash] [, options])`

| Name | Type | Description |
|------|------|-------------|
| hash | `String` | Git commit sha hash string |
| options | `Object` | Provided options are passed to [`execa`](https://github.com/sindresorhus/execa), used to set `cwd` and similar |

Returns: `Promise<Array<Object>>`

## License

MIT © [Joakim Carlstein](http://joakim.beng.se)

[npm-url]: https://npmjs.org/package/git-affected-files
[npm-image]: https://badge.fury.io/js/git-affected-files.svg
[travis-url]: https://travis-ci.org/joakimbeng/git-affected-files
[travis-image]: https://travis-ci.org/joakimbeng/git-affected-files.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-XO-5ed9c7.svg?style=flat
