var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');


var src_sass = 'app/sass/**/*.scss';
var src_css = 'app/css';

gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src(src_sass) // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest(src_css)) // Выгружаем результат в папку app/css
});

gulp.task('css', function () {
    return gulp.src(src_css +'/main.css')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(cssnano())
        .pipe(gulp.dest(src_css))
});

gulp.task('default', function () {
    gulp.watch(src_sass, ['sass'])
});

