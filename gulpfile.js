var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var sourcemaps = require('gulp-sourcemaps');
var server = require('browser-sync').create();

const { series } = require('gulp');

const paths = {
  scripts: {
    src: './less/**/*.less',
    dest: 'dist/'
  }
};

const clean = () => del(['dist']);

function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(less({
        plugins: [autoprefix],
        paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './'
    }
  });
  done();
}

const watch = () => gulp.watch(paths.scripts.src, gulp.series(scripts, reload));

const dev = gulp.series(clean, scripts, serve, watch);

exports.dev = dev;
exports.default = series(dev);

