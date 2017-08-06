// Configuration from css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var babelify = require('babelify');


gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});


gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		},
	})
});

gulp.task('useref', function() {
	return gulp.src('src/*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', uglify()))
	.pipe(gulp.dest('dist'))
});

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
});

gulp.task('images', function() {
	return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/images'))
});

gulp.task('clean:dist', function() {
	return del.sync('dist');
});

gulp.task('build', function (callback) {
	runSequence('clean:dist',['sass','useref','images','fonts'],
		callback
		)
})

gulp.task('default', function(callback) {
	runSequence(['sass','browserSync','watch'],
		callback
		)
})
