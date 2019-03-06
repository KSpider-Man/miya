//gulp的配置文件
var gulp = require("gulp");//加载gulp模块
var connect = require("gulp-connect");//服务器模块
var sass = require("gulp-sass");//将sass文件转换成css文件的模块
var sourcemaps = require('gulp-sourcemaps');//让编译后的文件和源文件的关联的模块
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");


gulp.task("default",function(){
	gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
});
gulp.task("copyImg",function(){
	gulp.src("img/*.{png,jpg,gif}").pipe(gulp.dest("dist/img"));
});
gulp.task("copyData",function(){
	gulp.src(["xml/*.xml","json/*.json"]).pipe(gulp.dest("dist/data"));
});
gulp.task("copyJs",function(){
	gulp.src("js/*.js").pipe(gulp.dest("dist/js"));
});
gulp.task("copyFont",function(){
	gulp.src("font/*.css").pipe(gulp.dest("dist/font"));
})

gulp.task("watch",function(){
	gulp.watch("img/*.{png,jpg,gif}",["copyImg"]);
	gulp.watch("*.html",["copyHtml"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("js/*.js",["copyJs"]);
	
});

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css")).pipe(connect.reload());;
});
gulp.task("concat",function(){
	gulp.src(["js/a.js","js/b.js"])
	.pipe(concat("mix.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("mix.min.js"))
	.pipe(gulp.dest("dist/js"));
});

gulp.task("babel",function(){
	gulp.src("js/test.js")
	 .pipe(babel({presets:["es2015"]}))  
	.pipe(gulp.dest("dist/js"));
})


gulp.task('server',function(){ 
	connect.server({
		root:'dist',
		livereload:true
		});
})  


gulp.task("watch",function(){
	gulp.watch("default",["server"]);
})










