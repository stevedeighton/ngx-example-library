let gulp = require('gulp'),
	gutil = require('gulp-util'),
	notify = require('gulp-notify'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename');

let less = require('gulp-less'),
	LessAutoprefix = require('less-plugin-autoprefix'),
	autoprefix = new LessAutoprefix({browsers: ['last 3 versions']}),
	LessCleanCSS = require('less-plugin-clean-css'),
	clean_css = new LessCleanCSS({advanced: true});

////////////////
//  WATCHERS  //
////////////////

gulp.task('watch', function () {
	gulp.watch(['./src/**/*.less', './src/assets/less/includes.less'], ['less:components']);
	gutil.log(gutil.colors.yellow('Watching...'));
});

/////////////////////
//  TASK WRAPPERS  //
/////////////////////

gulp.task('less:components', function () {
	let source = ['./src/**/*.less', '!./src/assets/**/*.less'];
	let dest = './src/';
	runLess(source, dest, 'less:components');
});

/////////////////
//  LESS TASK  //
/////////////////

let less_runners = [];

function runLess(source, dest, task_name) {
	if (less_runners.indexOf(task_name) === -1) {
		less_runners.push(task_name);
		log('start', task_name);
		let start = Date.now();
		gulp.src(source)
			.pipe(plumber(error_config))
			.pipe(less({
				plugins: [autoprefix, clean_css]
			}))
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest(dest))
			.on('end', function () {
				log('finish', task_name, Date.now() - start);
				less_runners.splice(less_runners.indexOf(task_name), 1);
			});
	}
}

////////////
//  LOG   //
////////////

function log(type, task_name, duration) {

	if (typeof(duration) === 'undefined') {
		duration = 0;
	}

	switch (type) {
		case 'start':
			gutil.log('Starting ' + gutil.colors.cyan(task_name) + ' ...');
			break;
		case 'finish':
			gutil.log('Finished ' + gutil.colors.green(task_name) + ' after ' + gutil.colors.magenta(duration + ' ms'));
			break;
	}
}

/////////////////////
//  ERROR HANDLER  //
/////////////////////

let error_config = {
	errorHandler: notify.onError({
		title: 'Gulp',
		message: 'Error: <%= error.message %>',
		sound: 'beep'
	})
};

////////////////////
//  DEFAULT TASK  //
////////////////////
gulp.task('default', function () {
	gulp.start('watch');
});
