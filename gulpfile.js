'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
/**
* 编译类别 nested expanded compact compressed
*/ 
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});