'use strict';

var _ = require('lodash');
var glob = require('glob');
var path = require('path');

function walk(cwd, pattern) {
	var fullPath = path.resolve(cwd, pattern);

	return new Promise((resolve, reject) => {
		glob(fullPath, function(err, paths) {
			if (err) {
				return reject(err);
			}

			return resolve(paths);
		});
	});
}

exports.execute = function(options) {
	var result = {};

	var promises = _.map(options.assets, function(files, key) {
		var promises = _.map(files, function(file) {
			return walk(options.cwd, file).then(function(paths) {
				return _.map(paths, function(p) {
					var url = p.replace(options.cwd + '/', '');

					if (options.prefix) {
						url = path.resolve(options.prefix, url);
					}

					return url;
				});
			});
		});

		return Promise.all(promises).then(function(paths) {
			return _.union.apply(_, paths);
		}).then(function(paths) {
			result[key] = paths;
		});
	});

	return Promise.all(promises).then(function() {
		return result;
	});
};
