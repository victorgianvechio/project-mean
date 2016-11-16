'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const rename = require("gulp-rename");
const strip = require('gulp-strip-comments');
const uglify = require('gulp-uglify');
//const zip = require('gulp-zip');
const pump = require('pump');
const gzip = require('gulp-gzip');
//const tar = require('gulp-tar');

/* ##### pug to HTML ##### */
gulp.task('pug-login-aluno', () => {
  gulp.src('../../web/views/login/login-aluno.pug')
  .pipe(pug({pretty: false}))
  .pipe(rename({extname: '.pug', suffix: '-min'}))
  .pipe(gulp.dest('../../web/dist'));
});

gulp.task('pug-login-docente', () => {
  gulp.src('../../web/views/login/login-docente.pug')
  .pipe(pug({pretty: false}))
  .pipe(rename({extname: '.pug', suffix: '-min'}))
  .pipe(gulp.dest('../../web/dist'));
});

gulp.task('pug-aluno', () => {
  gulp.src('../../web/views/aluno/aluno.pug')
  .pipe(pug({pretty: false}))
  .pipe(rename({extname: '.pug', suffix: '-min'}))
  .pipe(gulp.dest('../../web/dist'));
});

/* ##### altera arquivo conforme salva ##### */
gulp.task('watch', () => {
  gulp.watch('../../web/views/aluno/aluno.pug', ['pug-aluno'])
});

/* ##### ECMAScript6 to ECMAScript5 ##### */
gulp.task('babel', () => {
  gulp.src('./api/controller/aluno-controller.js')
  .pipe(babel({presets: ['es2015']}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./gulp-dest/mins/ex2'));
});

/* ##### minifica .js e remove comentários ##### */
gulp.task('uglify', (cb) => {
  pump([
    gulp.src('./gulp-dest/mins/ex2/aluno-controller.min.js'),
    uglify(),
    //rename({suffix: '.min'}),
    gulp.dest('./gulp-dest/mins/ex2')
  ], cb);
});

/* ##### remove comentários .js, .css, .html, .json ##### */
gulp.task('strip', () => {
  gulp.src('./gulp-dest/mins/ex2/aluno-controller.min.js')
  .pipe(strip())
  //.pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./gulp-dest/mins/ex2'));
});

/* ##### gera .zip ##### */
/*gulp.task('zip', () => {
gulp.src('./gulp-dest/mins/ex2/aluno-controller.min.js')
.pipe(zip('aluno-controler.min.zip'))
.pipe(gulp.dest('./gulp-dest/mins/ex2'));
});*/

/* ##### gera .gz ##### */
gulp.task('gzip', () => {
  gulp.src('./gulp-dest/mins/ex2/aluno-controller.min.js')
  .pipe(gzip())
  .pipe(rename({basename: 'aluno-controller', suffix: '.min', extname: '.gz'}))
  .pipe(gulp.dest('./gulp-dest/mins/ex2'));
});

/* ##### gera .tar ##### */
/*gulp.task('tar', () => {
gulp.src('./gulp-dest/mins/ex2/aluno-controller.min.js')
.pipe(tar('aluno-controller.min.tar'))
.pipe(gulp.dest('./gulp-dest/mins/ex2'));
});*/

gulp.task('default', ['pug-login-aluno', 'pug-login-docente', 'pug-aluno']);
//gulp.task('default', ['pug-login', 'watch']);
//gulp.task('default', ['pug']);
