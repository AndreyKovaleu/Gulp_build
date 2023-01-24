// Основные модули
import gulp from 'gulp';

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

// Глобальные переменные
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins
}

// Импорт задач
import { copy } from './gulp/tasks/copy.js';
import { reset, resetPublish } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprites } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';
import { gitHubPages } from './gulp/tasks/ghPages.js';

// Наблюдатель за изменениеями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

// Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценария выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployGHPages = gulp.series(reset, mainTasks, gitHubPages, resetPublish);

// Экспорт сценариев
export { dev };
export { build };
export { deployZIP };
export { svgSprites };
export { deployGHPages };

// Выполнение сценария по умолчанию
gulp.task('default', dev);