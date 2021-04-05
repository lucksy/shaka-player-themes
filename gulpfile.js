const gulp = require('gulp');
const { series } = require('gulp');
var less = require('gulp-less');
var del = require('del');
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var sourcemaps = require('gulp-sourcemaps');
var server = require('browser-sync').create();
var foreach = require("gulp-foreach");
const zip = require('gulp-zip');

const paths = {
  scripts: {
    src: './assets/**/**/*.less',
    dest: 'dist/'
  }
};

const clean = () => del(['dist']);

function less_scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(less({
        plugins: [autoprefix],
        paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

function file_scripts() {
  return gulp.src([
            './assets/**/**/*.html', 
            './assets/**/**/*.js'
        ])
    .pipe(gulp.dest(paths.scripts.dest));
}

function zip_scripts() {
  return gulp.src("./dist/**/**/*")
       .pipe(foreach(function(stream, file){
          var fileName = file.path.substr(file.path.lastIndexOf("/")+1);
          gulp.src("./dist/**/"+fileName+"/**/*")
              .pipe(zip(fileName+".zip"))
              .pipe(gulp.dest("./download"));
          return stream;
       }));
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


const watch = () => gulp.watch([paths.scripts.src, './assets/**/**/*.html', './assets/**/**/*.js', 'index.html', './js/script.js'], gulp.series(less_scripts, file_scripts, zip_scripts, reload));

const dev = gulp.series(clean, less_scripts, file_scripts, zip_scripts, serve, watch);

exports.dev = dev;
exports.default = series(dev);

