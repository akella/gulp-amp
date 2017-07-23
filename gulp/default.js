var gulp = require('gulp');
var runseq = require('run-sequence');

gulp.task('default', function(){
	runseq(
		'copy',
		'sass',
		'server',
		'copy:watch',
		'sass:watch'
	);
});