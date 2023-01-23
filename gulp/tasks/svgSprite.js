import svgSprite from 'gulp-svg-sprite';

const svgSprites = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'SVG',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(svgSprite({
            mode: {
              stack: {
                sprite: `../icons/icons.svg`,
                // Создать страницу с перечнем иконок
                example: true
              }
            }
          }))
          .pipe(app.gulp.dest(`${app.path.build.images}`))
}

export {svgSprites};