/**
 * .eslintrc.js
 * ------------
 * @author brikcss
 * @homepage https://github.com/brikcss
 * @description Configuration object for [ESLint](https://eslint.org).
 * ---------------------------------------------------------------------
 */


const isProd = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';
module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	extends: 'eslint:recommended',
	env: {
		browser: true,
		node: true,
		es6: true
	},
	// add your custom rules here
	'rules': {
		// allow debugger during development
		'no-debugger': isProd ? 2 : 0
	}
}