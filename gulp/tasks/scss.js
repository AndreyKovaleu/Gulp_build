import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import GulpCleanCss from 'gulp-clean-css';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'SCSS',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(app.plugins.replace(/@img\//g, '../img/'))
          .pipe(sass({
            outputStyle: 'expanded'
          }).on('error', sass.logError))
          .pipe(
            app.plugins.if(
              app.isBuild,
              groupCssMediaQueries()
            )
          )
          .pipe(
            app.plugins.if(
              app.isBuild,
              autoPrefixer({
                grid: true,
                overrideBrowserslist: [
                  'last 3 versions',
                  '> 1%',
                  'not dead'
                ],
                cascade: true
              })
            )
          )
          .pipe(
            app.plugins.if(
              app.isBuild,
              webpCss()
            )
          )
          // Для добавления не сжатого файла со стилями в dist
          // .pipe(app.gulp.dest(app.path.build.css))
          .pipe(GulpCleanCss())
          .pipe(rename({
            extname: '.min.css'
          }))
          .pipe(app.gulp.dest(app.path.build.css))
          .pipe(app.plugins.browserSync.stream())
}

export { scss };