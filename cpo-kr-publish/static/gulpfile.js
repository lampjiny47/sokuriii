// gulpfile.js
const gulp = require('gulp');
const	sourcemaps = require('gulp-sourcemaps');
const	sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const connectSSI = require('connect-ssi');

const src = {
	HmcPcHtml: './HMC/p/SHTML/**/*.shtml',
	HmcPcJs: './HMC/p/js/**/*.js',
	HmcPcCss: './HMC/p/scss/page/*.scss',
	HmcPcCssL: './HMC/p/scss/_layout/*.scss',
	HmcPcCssC: './HMC/p/scss/_common/*.scss',

	HmcMoHtml: './HMC/m/SHTML/**/*.shtml',
	HmcMoJs: './HMC/m/js/**/*.js',
	HmcMoCss: './HMC/m/scss/page/*.scss',
	HmcMoCssL: './HMC/m/scss/_layout/*.scss',
	HmcMoCssC: './HMC/m/scss/_common/*.scss',

	GhqPcHtml: './GHQ/p/SHTML/**/*.shtml',
	GhqPcJs: './GHQ/p/js/**/*.js',
	GhqPcCss: './GHQ/p/scss/page/*.scss',
	GhqPcCssL: './GHQ/p/scss/_layout/*.scss',
	GhqPcCssC: './GHQ/p/scss/_common/*.scss',

	GhqMoHtml: './GHQ/m/SHTML/**/*.shtml',
	GhqMoJs: './GHQ/m/js/**/*.js',
	GhqMoCss: './GHQ/m/scss/page/*.scss',
	GhqMoCssL: './GHQ/m/scss/_layout/*.scss',
	GhqMoCssC: './GHQ/m/scss/_common/*.scss',

	IsptMo: './ISPT/scss/page/*.scss',
	IsptMoL: './ISPT/scss/_layout/*.scss',
	IsptMoC: './ISPT/scss/_common/*.scss',

	GuidePcHtml: './00-guide/p/*.shtml',
	GuidePcCss: './00-guide/p/scss/*.scss',

	Po: './NonCPO/scss/page/*.scss',
	PoCommon: './NonCPO/scss/_common/*.scss',

	HilabMoHtml: './HILAB/m/SHTML/**/*.shtml',
	HilabMoJs: './HILAB/m/js/**/*.js',
	HilabMoCss: './HILAB/m/scss/page/*.scss',
	HilabMoCssL: './HILAB/m/scss/_layout/*.scss',
	HilabMoCssC: './HILAB/m/scss/_common/*.scss',

	HilabPcHtml: './HILAB/p/SHTML/**/*.shtml',
	HilabPcJs: './HILAB/p/js/**/*.js',
	HilabPcCss: './HILAB/p/scss/page/*.scss',
	HilabPcCssL: './HILAB/p/scss/_layout/*.scss',
	HilabPcCssC: './HILAB/p/scss/_common/*.scss',

	CaMoHtml: './CA/m/SHTML/**/*.shtml',
	CaMoJs: './CA/m/js/**/*.js',
	CaMoCss: './CA/m/scss/page/*.scss',
	CaMoCssL: './CA/m/scss/_layout/*.scss',
	CaMoCssC: './CA/m/scss/_common/*.scss',

	CaPcHtml: './CA/p/SHTML/**/*.shtml',
	CaPcJs: './CA/p/js/**/*.js',
	CaPcCss: './CA/p/scss/page/*.scss',
	CaPcCssL: './CA/p/scss/_layout/*.scss',
	CaPcCssC: './CA/p/scss/_common/*.scss',
};

const dist = {
	HmcPcCss: './HMC/p/css/',
	HmcMoCss: './HMC/m/css/',
	GhqPcCss: './GHQ/p/css/',
	GhqMoCss: './GHQ/m/css/',
	IsptMo: './ISPT/css/',
	Po: './NonCPO/css/',
	GuidePcCss: './00-guide/p/css/',
	HilabMoCss: './HILAB/m/css/',
	HilabPcCss: './HILAB/p/css/',
	CaMoCss: './CA/m/css/',
	CaPcCss: './CA/p/css/',
};

gulp.task('HmcMoHtml', function() {
	return gulp.src(src.HmcMoHtml)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('HmcMoJs', function() {
	return gulp.src(src.HmcMoJs)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('HmcMoCss', function() {
	return gulp.src(src.HmcMoCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.HmcMoCss))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('HmcPcHtml', function() {
	return gulp.src(src.HmcPcHtml)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('HmcPcJs', function() {
	return gulp.src(src.HmcPcJs)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('HmcPcCss', function() {
	return gulp.src(src.HmcPcCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.HmcPcCss))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('GhqMoHtml', function() {
	return gulp.src(src.GhqMoHtml)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('GhqMoJs', function() {
	return gulp.src(src.GhqMoJs)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('GhqMoCss', function() {
	return gulp.src(src.GhqMoCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.GhqMoCss))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('GhqPcHtml', function() {
	return gulp.src(src.GhqPcHtml)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('GhqPcJs', function() {
	return gulp.src(src.GhqPcJs)
	.pipe(browserSync.reload({ stream: true }));
});
gulp.task('GhqPcCss', function() {
	return gulp.src(src.GhqPcCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.GhqPcCss))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('GuidePcHtml', function() {
	return gulp.src(src.GuidePcHtml)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserSync', () => {
  return browserSync.init({
    port: 10,
    server: {
      baseDir: './',
      middleware: [
        connectSSI({
           baseDir: './',
           ext: '.shtml'
        })
      ]
    }
  })
});


gulp.task('watch', function() {
	gulp.watch(src.HmcMoHtml, gulp.series('HmcMoHtml'));
	gulp.watch(src.HmcMoJs, gulp.series('HmcMoJs'));
	gulp.watch(src.HmcMoCss, gulp.series('HmcMoCss'));
	gulp.watch(src.HmcMoCssL, gulp.series('HmcMoCss'));
	gulp.watch(src.HmcMoCssC, gulp.series('HmcMoCss'));
	
	gulp.watch(src.HmcPcHtml, gulp.series('HmcPcHtml'));
	gulp.watch(src.HmcPcJs, gulp.series('HmcPcJs'));
	gulp.watch(src.HmcPcCss, gulp.series('HmcPcCss'));
	gulp.watch(src.HmcPcCssL, gulp.series('HmcPcCss'));
	gulp.watch(src.HmcPcCssC, gulp.series('HmcPcCss'));

	gulp.watch(src.GhqMoHtml, gulp.series('GhqMoHtml'));
	gulp.watch(src.GhqMoJs, gulp.series('GhqMoJs'));
	gulp.watch(src.GhqMoCss, gulp.series('GhqMoCss'));
	gulp.watch(src.GhqMoCssL, gulp.series('GhqMoCss'));
	gulp.watch(src.GhqMoCssC, gulp.series('GhqMoCss'));

	gulp.watch(src.GhqPcHtml, gulp.series('GhqPcHtml'));
	gulp.watch(src.GhqPcJs, gulp.series('GhqPcJs'));
	gulp.watch(src.GhqPcCss, gulp.series('GhqPcCss'));
	gulp.watch(src.GhqPcCssL, gulp.series('GhqPcCss'));
	gulp.watch(src.GhqPcCssC, gulp.series('GhqPcCss'));

});


gulp.task('default',
	gulp.parallel(
		'HmcMoHtml',
		'HmcMoJs',
		'HmcMoCss',
		'HmcPcHtml',
		'HmcPcJs',
		'HmcPcCss',
		'GhqMoHtml',
		'GhqMoJs',
		'GhqMoCss',
		'GhqPcHtml',
		'GhqPcJs',
		'GhqPcCss',
		'watch',
		'browserSync'
	)
);

//배포용 소스맵 없이 압축된 css로 컴파일
gulp.task('HmcMoCssProd', function() {
	return gulp.src(src.HmcMoCss)
	.pipe(sass({ 
		outputStyle: 'compressed',
	}).on('error', sass.logError))
	.pipe(gulp.dest(dist.HmcMoCss))
});

gulp.task('HmcPcCssProd', function() {
	return gulp.src(src.HmcPcCss)
	.pipe(sass({ 
		outputStyle: 'compressed',
	}).on('error', sass.logError))
	.pipe(gulp.dest(dist.HmcPcCss))
});

gulp.task('GhqMoCssProd', function() {
	return gulp.src(src.GhqMoCss)
	.pipe(sass({ 
		outputStyle: 'compressed',
	}).on('error', sass.logError))
	.pipe(gulp.dest(dist.GhqMoCss))
});

gulp.task('GhqPcCssProd', function() {
	return gulp.src(src.GhqPcCss)
	.pipe(sass({ 
		outputStyle: 'compressed',
	}).on('error', sass.logError))
	.pipe(gulp.dest(dist.GhqPcCss))
});

gulp.task('HilabMoCssProd', function() {
	return gulp.src(src.HilabMoCss)
	.pipe(sass({ 
		outputStyle: 'compressed',
	}).on('error', sass.logError))
	.pipe(gulp.dest(dist.HilabMoCss))
});

gulp.task('HilabPcCssProd', function() {
	return gulp.src(src.HilabPcCss)
	.pipe(sass({ 
		outputStyle: 'compressed',
	}).on('error', sass.logError))
	.pipe(gulp.dest(dist.HilabPcCss))
});

gulp.task('prod', gulp.series(
	'HmcMoCssProd',
	'HmcPcCssProd',
	'GhqMoCssProd',
	'GhqPcCssProd',
	'HilabMoCssProd',
	'HilabPcCssProd',
));

//실사검수사MC
gulp.task('IsptMoCss', function() {
	return gulp.src(src.IsptMo)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.IsptMo))
	.pipe(browserSync.reload({ stream: true }));
});

//중개매매
gulp.task('PoCss', function() {
	return gulp.src(src.Po)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.Po))
	.pipe(browserSync.reload({ stream: true }));
});

//가이드
gulp.task('GuidePcCss', function() {
	return gulp.src(src.GuidePcCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.GuidePcCss))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('IsptWatch', function() {
	gulp.watch(src.IsptMo, gulp.series('IsptMoCss'));
	gulp.watch(src.IsptMoL, gulp.series('IsptMoCss'));
	gulp.watch(src.IsptMoC, gulp.series('IsptMoCss'));
});

gulp.task('PoWatch', function() {
	gulp.watch(src.Po, gulp.series('PoCss'));
	gulp.watch(src.PoCommon, gulp.series('PoCss'));
});

gulp.task('GuideWatch', function() {
	gulp.watch(src.GuidePcCss, gulp.series('GuidePcCss'));
});

// ispt(dev)
gulp.task('ispt', gulp.series('IsptMoCss','IsptWatch'));

// po(dev)
gulp.task('po', gulp.series('PoCss','PoWatch'));

// guide(dev)
gulp.task('guide', gulp.series('GuidePcCss','GuideWatch'));


// hilab Mo
gulp.task('HilabMoHtml', function() {
	return gulp.src(src.HilabMoHtml)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('HilabMoJs', function() {
	return gulp.src(src.HilabMoJs)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('HilabMoCss', function() {
	return gulp.src(src.HilabMoCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.HilabMoCss))
	.pipe(browserSync.reload({ stream: true }));
});

// hilab Pc
gulp.task('HilabPcHtml', function() {
	return gulp.src(src.HilabPcHtml)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('HilabPcJs', function() {
	return gulp.src(src.HilabPcJs)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('HilabPcCss', function() {
	return gulp.src(src.HilabPcCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.HilabPcCss))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('Hilab', function() {
	gulp.watch(src.HilabMoHtml, gulp.series('HilabMoHtml'));
	gulp.watch(src.HilabMoJs, gulp.series('HilabMoJs'));
	gulp.watch(src.HilabMoCss, gulp.series('HilabMoCss'));
	gulp.watch(src.HilabMoCssL, gulp.series('HilabMoCss'));
	gulp.watch(src.HilabMoCssC, gulp.series('HilabMoCss'));
	gulp.watch(src.HilabPcHtml, gulp.series('HilabPcHtml'));
	gulp.watch(src.HilabPcJs, gulp.series('HilabPcJs'));
	gulp.watch(src.HilabPcCss, gulp.series('HilabPcCss'));
	gulp.watch(src.HilabPcCssL, gulp.series('HilabPcCss'));
	gulp.watch(src.HilabPcCssC, gulp.series('HilabPcCss'));
});

gulp.task('hi',
	gulp.parallel(
		'HilabMoHtml',
		'HilabMoJs',
		'HilabPcHtml',
		'HilabPcJs',
		'HilabMoCss',
		'HilabPcCss',
		'Hilab',
		'browserSync'
	)
);

//비매집PC
gulp.task('CaPcHtml', function() {
	return gulp.src(src.CaPcHtml)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('CaPcJs', function() {
	return gulp.src(src.CaPcJs)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('CaPcCss', function() {
	return gulp.src(src.CaPcCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.CaPcCss))
	.pipe(browserSync.reload({ stream: true }));
});

//비매집Mo
gulp.task('CaMoHtml', function() {
	return gulp.src(src.CaMoHtml)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('CaMoJs', function() {
	return gulp.src(src.CaMoJs)
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('CaMoCss', function() {
	return gulp.src(src.CaMoCss)
	.pipe(sourcemaps.init())
	.pipe(sass({ 
		sourceMap: true,
	}).on('error', sass.logError))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest(dist.CaMoCss))
	.pipe(browserSync.reload({ stream: true }));
});

gulp.task('CA', function() {
	gulp.watch(src.CaMoHtml, gulp.series('CaMoHtml'));
	gulp.watch(src.CaMoJs, gulp.series('CaMoJs'));
	gulp.watch(src.CaMoCss, gulp.series('CaMoCss'));
	gulp.watch(src.CaMoCssL, gulp.series('CaMoCss'));
	gulp.watch(src.CaMoCssC, gulp.series('CaMoCss'));
	gulp.watch(src.CaPcHtml, gulp.series('CaPcHtml'));
	gulp.watch(src.CaPcJs, gulp.series('CaPcJs'));
	gulp.watch(src.CaPcCss, gulp.series('CaPcCss'));
	gulp.watch(src.CaPcCssL, gulp.series('CaPcCss'));
	gulp.watch(src.CaPcCssC, gulp.series('CaPcCss'));
});

gulp.task('ca',
	gulp.parallel(
		'CaMoHtml',
		'CaMoJs',
		'CaPcHtml',
		'CaPcJs',
		'CaMoCss',
		'CaPcCss',
		'CA',
		'browserSync'
	)
);

//pc watch
gulp.task('pcWatch', ()=>{
	gulp.watch(src.HmcPcHtml, gulp.series('HmcPcHtml'));
	gulp.watch(src.HmcPcJs, gulp.series('HmcPcJs'));
	gulp.watch(src.HmcPcCss, gulp.series('HmcPcCss'));
	gulp.watch(src.GhqPcHtml, gulp.series('GhqPcHtml'));
	gulp.watch(src.GhqPcJs, gulp.series('GhqPcJs'));
	gulp.watch(src.GhqPcCss, gulp.series('GhqPcCss'));
	gulp.watch(src.GhqPcCssL, gulp.series('GhqPcCss'));
	gulp.watch(src.GhqPcCssC, gulp.series('GhqPcCss'));

});
gulp.task('order', gulp.parallel('pcWatch', 'browserSync') );

