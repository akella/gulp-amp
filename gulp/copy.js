var gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src('src/**/*')
  	.pipe(gulp.dest('build/'))
});

gulp.task('copy:watch', function () {
  gulp.watch('src/**/*', ['copy']);
});