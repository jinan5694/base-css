'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
/**
* 编译类别 nested expanded compact compressed
*/ 
gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError))
    .pipe(gulp.dest('E:/svn/utouu-menke/utouu-menke-web/src/main/webapp/public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});