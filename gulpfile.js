var gulp       = require('gulp');
var rename     = require('gulp-rename');
var watch      = require('gulp-watch');
var babel = require('gulp-babel');

gulp.task('js', function () {
  gulp
    .src('es6.js')
    .pipe(babel())
    .pipe(rename('es5.js'))
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
  gulp.watch(['es6.js'], ['js']);
});

gulp.task('default', ['js', 'watch']);