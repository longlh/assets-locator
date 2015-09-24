assets-locator
======

Assets locator for NodeJS

### Installation
```bash
npm install assets-locator
```

### Usage
Assume you have a JSON file for `uglify` task:

```
{
	"js": {
		"build/out/js/home.js": [
			"bower_components/di-linker/browser/dist/di-linker.standalone.min.js",
			"bower_components/ractive/ractive.min.js",
			"bower_components/jquery/dist/jquery.min.js",
			"bower_components/tween.js/build/tween.min.js",
			"bower_components/hammerjs/hammer.min.js",
			"app/public/js/home/**/*.js",
			"app/public/js/bootstrap.js"
		],
		"build/out/js/articles.js": [
			"bower_components/di-linker/browser/dist/di-linker.standalone.min.js",
			"bower_components/ractive/ractive.min.js",
			"bower_components/jquery/dist/jquery.min.js",
			"app/public/js/articles/**/*.js",
			"app/public/js/bootstrap.js"
		]
	}
}
```

In development environment, you can use `assets-locator` to generate all files in each bundle:

```javascript

var locator = require('assets-locator');

locator.execute({
	cwd: path.resolve(__dirname, '../..'),
	assets: require('./assets.json').js,
	prefix: '/'
}).then(function(bundles) {
	console.log(bundles);

	/* OUTPUT
	{
		'build/out/js/home.js': [
			'/bower_components/di-linker/browser/dist/di-linker.standalone.min.js',
			'/bower_components/ractive/ractive.min.js',
			'/bower_components/jquery/dist/jquery.min.js',
			'/bower_components/tween.js/build/tween.min.js',
			'/bower_components/hammerjs/hammer.min.js',
			'/app/public/js/home/animation.js',
			'/app/public/js/home/frame.js',
			'/app/public/js/home/import.js',
			'/app/public/js/home/layout.js',
			'/app/public/js/home/main.js',
			'/app/public/js/home/navigator.js',
			'/app/public/js/bootstrap.js'
		],
		'build/out/js/articles.js': [
			'/bower_components/di-linker/browser/dist/di-linker.standalone.min.js',
			'/bower_components/ractive/ractive.min.js',
			'/bower_components/jquery/dist/jquery.min.js',
			'/app/public/js/articles/main.js',
			'/app/public/js/bootstrap.js'
		]
	}
	*/

	// create Express template helper using bundles information
});

```

### License
[The MIT License](http://opensource.org/licenses/MIT)
