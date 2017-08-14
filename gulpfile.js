var gulp = require("gulp"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    minify = require("gulp-minify-css"),
    autoprefixer = require("gulp-autoprefixer");

//## Configuración de tareas ###

// Javascript concat and minify
gulp.task("js", function () {
    gulp.src("js/src/*.js")
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("js/build/"))
});

// CSS concat, autoprefixer and minify
gulp.task("css", function(){
    gulp.src("css/src/*.css")
    .pipe(autoprefixer())
    .pipe(concat("styles.min.css"))
    .pipe(minify())
    .pipe(gulp.dest("css/build/"))
});

//## Procedimiento Manual:  Tarea que ejecuta todas las tareas ###
gulp.task("default", ["js", "css"], function(){
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