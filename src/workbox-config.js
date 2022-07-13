module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,png,css,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};