'use-strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var copy = require('gulp-contrib-copy');

gulp.task('styles', function () {
    gulp.src('css/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('docs/css/'));
});

gulp.task('scripts', function() {
    gulp.src('js/jquery-2.2.3.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('docs/js'));
});

gulp.task('copy',function() {
    gulp.src(sources)
    .pipe(copy())
    .pipe(gulp.dest('docs/images/'));
});