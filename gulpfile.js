var gulp = require("gulp"),
    hash = require('gulp-hash-filename');
    uglify = require("gulp-uglify"),
    minify = require("gulp-minify-css"),
    autoprefixer = require("gulp-autoprefixer");
    imagemin = require('gulp-imagemin');

//## Configuración de tareas ###

// Javascript rename, hash and minify
gulp.task("js", function() {
  return gulp.src("src/js/*.js")
    .pipe(hash({ "format": "{name}.{hash:8}.min{ext}" }))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
});

// CSS rename, autoprefixer and minify
gulp.task("css", function() {
  return gulp.src("src/css/*.css")
    .pipe(hash({ "format": "{name}.{hash:8}.min{ext}" }))
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest("./dist/css"))
});

gulp.task('img', function () {
  gulp.src('src/assets/img/*')
    .pipe(hash({ "format": "{name}.{hash:8}.min{ext}" }))
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
});

//## Procedimiento Manual:  Tarea que ejecuta todas las tareas ###
gulp.task("default", ["js", "css", "img"], function(){
});

//## Procedimiento Automatico: Ejecutar tareas ###
gulp.task("autogen", function(){
    gulp.watch('css/src/*.css', function() {
        gulp.run('css');
    });

    gulp.watch('js/src/*.js', function() {
        gulp.run('js');
    });
});