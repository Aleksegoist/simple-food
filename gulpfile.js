const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');
const ttf2woff2 = require('gulp-ttf2woff2');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notify: false,
  });
}

/* ADD: create sprites */
function svgSprites() {
  return src('app/images/icons/*.svg')
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      })
    )
    .pipe(dest('app/images'));
}

/* ADD: convert fonts */
function convertFonts() {
  return src('app/fonts/*.ttf').pipe(ttf2woff2()).pipe(dest('app/fonts/'));
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true,
      })
    )
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/swiper/swiper-bundle.js',
    'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
    'node_modules/rateyo/src/jquery.rateyo.js',
    'app/js/main.js',
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

function images() {
  return src('app/images/**/*.*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest('dist/images'));
}

function build() {
  return src(['app/**/*.html', 'app/css/style.min.css', 'app/js/main.min.js'], {
    base: 'app',
  }).pipe(dest('dist'));
}

function cleanDist() {
  return del('dist');
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/images/icons/*.svg'], svgSprites);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprites = svgSprites;
exports.convertFonts = convertFonts;
exports.build = series(cleanDist, images, build);

exports.default = parallel(svgSprites, styles, browsersync, watching);
