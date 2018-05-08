const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const image = require('gulp-image');

const folders = {
    src: 'src/',
    dist: 'dist/'
};

gulp.task('html', function() {
  return gulp.src(`${folders.src}*.html`)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(folders.dist));
});


gulp.task('css', () => {
  return gulp.src(`${folders.src}css/*.css`)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(`${folders.dist}css`));
});

gulp.task('js', () => {
    return gulp.src(`${folders.src}js/*.js`)
      .pipe(uglify())
      .pipe(gulp.dest(`${folders.dist}js`));
});

gulp.task('fonts', () => {
    return gulp.src([`${folders.src}fonts/*`])
        .pipe(gulp.dest(`${folders.dist}fonts/`));
});

gulp.task('favicon', () => {
    return gulp.src([`${folders.src}favicon.ico`])
        .pipe(gulp.dest(`${folders.dist}`));
});

gulp.task('image', () => {
    return gulp.src(`${folders.src}img/*`)
        .pipe(image())
        .pipe(gulp.dest(`${folders.dist}img/`));
});

gulp.task('default', [
    'html',
    'css',
    'js',
    'image',
    'fonts',
    'favicon',
]);