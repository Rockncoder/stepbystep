'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function() {
  console.log('Compiling typescript');
  return gulp.src(['./**/*.ts', '!./node_modules/**', './typings/**/*.ts'])
    .pipe(ts({
      module: 'commonjs',
      target: 'ES5',
      removeComments: true
    }))
    .pipe(gulp.dest('./'));
});
