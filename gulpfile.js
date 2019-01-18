const gulp = require('gulp');
const saas=require('gulp-sass');
const sourcemaps=require('gulp-sourcemaps');
const cssScss = require ('gulp-css-scss');


 const dist='dist/css';

gulp.task('sass',function(){
    //console.log("Working Gulp...");
    return gulp.src('src/*.scss')
    .pipe(saas())
    .pipe(gulp.dest(dist))
});
gulp.task('bundlecss',()=>{
    gulp.src(dist+'/*.css')
    .pipe(sourcemaps.init())
    
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist+'/sourcemap'));
});
gulp.task('message',function(){
   console.log('gulp is running....')
});

gulp.task('css-scss', () => {
    gulp.src('dist/css/*.css')
      .pipe(cssScss())
      .pipe(gulp.dest('dist/cssScss'));
  });
// gulp.task('default',gulp.series(['sass','bundlecss','message']));
gulp.task('watch',()=>{
    gulp.watch('src/*.scss',gulp.series('sass'))
    gulp.watch(dist+'/*.css',gulp.series('bundlecss'))
    
})
