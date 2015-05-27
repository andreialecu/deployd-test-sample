var gulp = require('gulp')
  , mainBowerFiles = require('main-bower-files')
  , test = require('deployd-test-runner');

gulp.task('bower', function(){
  return gulp.src(mainBowerFiles())
    .pipe(gulp.dest('public/deps'));
});

gulp.task('test', ['bower'], function(done){
  test.run(function(err) {
    if (err) {
      console.log("----------------------");
      console.log(err);
      console.log("----------------------");
      done("Test run failed");
    } else { done(); }
  });
});

gulp.task('default', ['test']);
