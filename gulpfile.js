//const elixir = require('laravel-elixir');
//require('laravel-elixir-vue-2');

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var jsFiles = 'public/js/custom-js/**/*.js';
var jsDest = 'public/js/dist';

gulp.task('scripts', function() {
	return gulp.src(jsFiles)
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});

gulp.task('less', function () {
	return gulp.src('public/less/*.less')
		.pipe(plumber())
		.pipe(less({
			paths: [ path.join(__dirname, 'less', 'includes') ]
	}))
	.pipe(gulp.dest('public/css/dist'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('public/js/custom-js/**/*.js', ['scripts']);
	gulp.watch('public/less/*.less', ['less']);
});
