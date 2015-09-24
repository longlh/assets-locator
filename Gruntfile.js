'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		jscs: {
			options: {
				config: 'grunt/.jscsrc'
			},
			server: {
				src: [
					'Gruntfile.js',
					'src/**/*.js'
				]
			}
		},
		jshint: {
			server: {
				options: {
					jshintrc: 'grunt/.jshintrc-server'
				},
				src: [
					'Gruntfile.js',
					'src/**/*.js'
				]
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [
		'jscs',
		'jshint'
	]);
};
