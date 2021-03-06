const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPNGquant = require('imagemin-pngquant');

// Enable ES6 PolyFill
// Change option to 'usage' in order to enable PolyFill;
// https://babeljs.io/docs/en/babel-preset-env#usebuiltins
module.exports.polyFill = false;

// Setting for cleaning SVGs from path, stroke and style
module.exports.cleanSVGs = false;

// Enable the processing of JS files with webpack.
module.exports.enableWebpack = true;

// Setting for padding between the images in the sprite
// https://github.com/2createStudio/postcss-sprites
// https://github.com/Ensighten/spritesmith#padding
module.exports.spritePadding = 4;

// Settings for images optimization
// These settings are used during the standard build process
// https://github.com/sindresorhus/gulp-imagemin

const imageminSettingsStandard = [
	// GIFs
	// https://github.com/imagemin/imagemin-gifsicle#api
	imagemin.gifsicle({
		interlaced: true
	}),

	// JP(E)G
	// https://github.com/imagemin/imagemin-jpegtran#api
	imageminMozjpeg({
		quality: 70
	}),

	// PNG
	// https://github.com/imagemin/imagemin-optipng#api
	imageminPNGquant({
		speed: 1,
		quality: 90
	}),
]

// Settings for images optimization during the `prod` process
module.exports.imageminSettingsProduction = [
	...imageminSettingsStandard,

	// SVG
	// https://github.com/imagemin/imagemin-svgo#api
	// https://github.com/svg/svgo#what-it-can-do
	imagemin.svgo({
		plugins: [
			{ cleanupAttrs: true },
			{ removeDoctype: true },
			{ removeXMLProcInst: true },
			{ removeComments: true },
			{ removeMetadata: true },
			{ removeUselessDefs: true },
			{ removeEditorsNSData: true },
			{ removeEmptyAttrs: true },
			{ removeHiddenElems: false },
			{ removeEmptyText: true },
			{ removeEmptyContainers: true },
			{ cleanupEnableBackground: true },
			{ removeViewBox: true },
			{ cleanupIDs: false },
			{ convertStyleToAttrs: true }
		]
	})
];

module.exports.imageminSettings = imageminSettingsStandard;

// Autoprefixer setting for browsers to support
// https://github.com/postcss/autoprefixer#browsers
module.exports.supportedBrowsers = ['last 3 versions'];
