import gulp     from 'gulp';
import plugins  from 'gulp-load-plugins';
import browser  from 'browser-sync';
import yargs    from 'yargs';
import fs       from 'fs';
import siphon   from 'siphon-media-query';
import path     from 'path';
import merge    from 'merge-stream';
import beep     from 'beepbeep';
import colors   from 'colors';



const $ = plugins();

gulp.task('build',
  gulp.series(sass));

gulp.task('default',
  gulp.series('build', sass, server, watch));


function sass() {
  return gulp.src('styles.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe(gulp.dest('css'));
}

function server(done) {
  browser.init({
    server: 'dist'
  });
  done();
}


function watch() {
  gulp.watch('*.html', '*.scss', '*.js').on('all', sass, gulp.series(browser.reload));
}
