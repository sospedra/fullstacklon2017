const gulp = require('gulp')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

gulp.task('default', function () {
  return gulp.src('app.js')
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./build'))
})
