import ghPages from 'gulp-gh-pages';

const gitHubPages = () => {
  return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
          .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
              title: 'GH-Pages',
              message: 'Error: <%= error.message %>'
            })
          ))
          .pipe(ghPages())
}

export { gitHubPages };