/**
 * stylelint.config.js
 * -------------------
 * @author brikcss
 * @homepage https://github.com/brikcss
 * @description Configuration for [stylelint](https://stylelint.io).
 * ---------------------------------------------------------------------
 */

/* eslint-env node */
var isProd = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';
module.exports = {
	extends: [
		// `stylelint-config-recommended` turns on all rules that can cause errors in CSS.
		'stylelint-config-recommended',
		'@brikcss/stylelint-config-css'
	],
	plugins: ['stylelint-scss'],
	formatter: 'stylelint-formatter-pretty',
	processors: [],
	ignoreFiles: [],
	defaultSeverity: isProd ? 'error' : 'warning',
	rules: {
		/** OVERWRITE EXISTING stylelint-config-css CSS RULES. */
		'max-nesting-depth': [
			3,
			{
				ignore: ['blockless-at-rules']
				// ignoreAtRules: []
			}
		],
		indentation: null,
		'function-comma-space-after': null,
		'function-parentheses-newline-inside': null,

		/** SASS RULES (stylelint-scss). */
		'scss/at-else-if-parentheses-space-before': 'always',
		'scss/at-function-parentheses-space-before': 'never',
		'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
		'scss/at-import-partial-extension-blacklist': ['css', 'scss', 'sass', 'less', 'styl', 'stylus'],
		'scss/at-mixin-parentheses-space-before': 'never',
		// 'scss/at-mixin-pattern': '/foo-.+/',
		// 'scss/at-function-pattern': '/foo-.+/',
		'scss/at-rule-no-unknown': true,
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-empty-line-before': [
			'always',
			{ except: ['first-nested', 'after-dollar-variable'], ignore: ['after-comment'] }
		],
		'scss/dollar-variable-no-missing-interpolation': true,
		// 'scss/dollar-variable-pattern': '/foo-.+/',
		// 'scss/percent-placeholder-pattern': '/foo-.+/',
		// 'scss/percent-placeholder-pattern': '/foo-.+/',
		'scss/media-feature-value-dollar-variable': 'always',
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
		'scss/selector-no-redundant-nesting-selector': true
	}
};
