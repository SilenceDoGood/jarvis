/* File: gulpfile.js */

// grab our gulp packages
const gulp  	= require('gulp');
const gutil 	= require('gulp-util');
const zip		= require('gulp-zip');


// create a default task and just log a messagegul
gulp.task('default', function() {
	return gutil.log('Gulp is running!')
});

gulp.task('zip', function() {
	let date = new Date();
	gulp.src(['index.js', 'node_modules', "package-lock.json"])
		.pipe(zip(`B_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getMinutes()}.zip`))
		.pipe(gulp.dest('builds/'));
});