const gulp = require('gulp');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const watch = require('gulp-watch');
const gutil = require('gulp-util');
const browserify = require('browserify');
const babel = require('gulp-babel');

gulp.task('sass', () =>
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
);

gulp.task('transform', () => {
    return gulp.src('js/*.jsx')
        .pipe(babel({
            presets: ["react", "es2015"]
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('js', ['transform'], () => {
    return browserify('dist/main.js')
        .bundle()
        .on('error', gutil.log)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['js', 'sass'], () => {
    gulp.watch('js/*.jsx', ['js']);
    gulp.watch('sass/*.scss', ['sass']);
});
