import gulp from 'gulp';
import plugins from 'gulp-load-plugins';
import browser from 'browser-sync';
import yargs from 'yargs';
import fs from 'fs';
import siphon from 'siphon-media-query';
import path from 'path';
import merge from 'merge-stream';
import beep from 'beepbeep';
import colors from 'colors';
import rimraf from 'rimraf'



const $ = plugins();

gulp.task('build',
  gulp.series(clean, sass, pages, js, assets));

gulp.task('default',
  gulp.series('build', server, watch));



// Delete the "site" folder every time a build starts
function clean(done) {
  rimraf('site', done);
}

//Compile sass into css
function sass() {
  return gulp.src('styles.scss')

    .pipe($.sass().on('error', $.sass.logError))

    .pipe(gulp.dest('site'));
}

//Pipe assets into the site folder
function assets() {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('site/assets'));
}


//Pipe html into the site folder
function pages() {
  return gulp.src('*.html')
    .pipe(gulp.dest('site'));
}

//Pipe js into the site folder
function js() {
  return gulp.src('*.js')
    .pipe(gulp.dest('site'));
}


//Start a server to preview the site
function server(done) {
  browser.init({
    server: 'site'
  });
  done();
}

//Watch for file changes
function watch() {
  gulp.watch('assets/**/*').on('all', gulp.series(assets, browser.reload));
  gulp.watch('*.html').on('all', gulp.series(pages, browser.reload));
  gulp.watch('*.scss').on('all', gulp.series(sass, pages, browser.reload));
  gulp.watch('*.js').on('all', gulp.series(sass, js, browser.reload));
}
