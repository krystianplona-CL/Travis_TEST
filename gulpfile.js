var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('scss-prod', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass ({
            errLogConsole: true,
            outputStyle: 'compressed',
        }).on("error", sass.logError))
		.pipe(autoprefixer({
				browsers:  [
					'last 3 chrome versions',
					'last 3 firefox versions',
					'last 3 opera versions',
					'last 3 safari versions',
					'last 3 ios versions',
					'android >= 4.0',
					'ie >= 10' 	// change to `last 3 ie versions` after IE12  release.
				]
			}))
		.pipe(gulp.dest('css'))
})

gulp.task('scss-dev', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass ({
            errLogConsole: true,
            outputStyle: 'expanded',
			sourceComments: true,
        }).on("error", sass.logError))
		.pipe(autoprefixer({
				browsers:  [
					'last 3 chrome versions',
					'last 3 firefox versions',
					'last 3 opera versions',
					'last 3 safari versions',
					'last 3 ios versions',
					'android >= 4.0',
					'ie >= 10' 	// change to `last 3 ie versions` after IE12  release.
				]
			}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
})
