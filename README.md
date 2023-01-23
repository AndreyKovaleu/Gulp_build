# Моя сборка GULP

## Описание проекта

Данная сборка предназначена для начинающих разработчиков, она помогает быстро и структурированно собрать Ваш проект

## Установленные пакеты

Ссылка на пакеты | Краткое описание пакета
:-----------:|:---------------:
[gulp-cli](https://www.npmjs.com/package/gulp-cli) | Для работы с Gulp в командной строке
[gulp](https://www.npmjs.com/package/gulp) | Для работы Gulp
[del](https://www.npmjs.com/package/del) | Для удаления файлов и папок
[gulp-file-include](https://www.npmjs.com/package/gulp-file-include) | Для сборки подключенных файлов в один файл
[gulp-replace](https://www.npmjs.com/package/gulp-replace) | Для изменения путей к файлам
[gulp-webp-html-nosvg](https://www.npmjs.com/package/gulp-webp-html-nosvg) | Для обработки картинок в форма WebP в файлах html, кроме формата svg
[gulp-version-number](https://www.npmjs.com/package/gulp-version-number) | Для добавления версии к файлам js/css/image
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber) | Для предотвращения прерывания потока в случае ошибки
[gulp-notify](https://www.npmjs.com/package/gulp-notify) | Для информирования о найденных ошибках
[browser-sync](https://www.npmjs.com/package/browser-sync) | Для подключения сервера
[sass](https://www.npmjs.com/package/sass) | Для работы с Sass/Scss
[gulp-sass](https://www.npmjs.com/package/gulp-sass) | Для работы с Sass/Scss в Gulp
[gulp-rename](https://www.npmjs.com/package/gulp-rename) | Для переименования файлов
[gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) | Для сжатия CSS файлов
[gulp-webpcss](https://www.npmjs.com/package/gulp-webpcss) | Для добавления класса webp к объявлениям картинок
[webp-converter@2.2.3](https://www.npmjs.com/package/webp-converter/v/2.2.3) | Для работы плагина gulp-webpcss
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) | Для добавления вендорных префиксов
[gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries) | Для групировки медиа запросов
[webpack](https://www.npmjs.com/package/webpack) | Для работы с Webpack
[webpack-stream](https://www.npmjs.com/package/webpack-stream) | Для работы с js модулями
[swiper](https://www.npmjs.com/package/swiper) | Для подключения слайдера Swiper
[gulp-webp](https://www.npmjs.com/package/gulp-webp) | Для пакетной генерации WebP изображений
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) | Для уменьшения размера картинок
[gulp-newer](https://www.npmjs.com/package/gulp-newer) | Для проверки обновления картинок
[gulp-fonter](https://www.npmjs.com/package/gulp-fonter) | Для преобразования шрифтов в другой формат
[gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2) | Для создания файлов в формате woff2 из файлов ttf
[gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) | Для создания спрайта из файлов svg
[gulp-if](https://www.npmjs.com/package/gulp-if) | Для условного ветвления в режиме разработчика и продакшн
[gulp-zip](https://www.npmjs.com/package/gulp-zip) | Для создания zip архива

## Структура папок

### Начальная структура
```
.
├── gulp
│   ├── config
│   │   ├── path.js
│   │   └── path.js
│   ├── tasks
│   │   ├── copy.js
│   │   ├── fonts.js
│   │   ├── html.js
│   │   ├── images.js
│   │   ├── js.js
│   │   ├── reset.js
│   │   ├── scss.js
│   │   ├── server.js
│   │   ├── svgSprite.js
│   │   └── zip.js
│   └── version.json
├── src
│   ├── files
│   │   └── .*
│   ├── fonts
│   │   └── .{ ttf, otf }
│   ├── html
│   │   └── .html
│   ├── img
│   │   └── .{ jpg,jpeg,png,svg,gif,ico,webp }
│   ├── js
│   │   ├── modules
│   │   │   └── .js
│   │   └── app.js
│   ├── scss
│   │   └── .scss
│   ├── svgicons
│   │   └── .svg
│   └── index.html
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md
```

### Конечная структура
```
.
├── dist
│   ├── css
│   │   └── style.min.css
│   ├── files
│   │   └── .*
│   ├── fonts
│   │   └── .{ woff, woff2 }
│   ├── img
│   │   └── .{ jpg,jpeg,png,svg,gif,ico,webp }
│   ├── js
│   │   └── app.min.js
│   └── index.html
```

## Расширение для VS Code

Расширение [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete), для VS Code, обеспечивает подстановку верного пути при сборке проекта.

### Настройка расширения Path Autocomplete

Зайдите в файл settings.json и пропишите следующие настройки:
```
"path-autocomplete.pathMappings": {
	"@img": "${folder}/src/img", // alias for /test
	"@scss": "${folder}/src/scss", // the absolute root folder is now /src,
	"@js": "${folder}/src/js", // the relative root folder is now /src
},
"window.zoomLevel": 0
```
Это нужно для того, чтобы при сбоке проекта пути к картинкам, scss файлам, js файлам обрабатывались корректно при указании одного из флагов (@img, @scss, @js) в путях к Вашим файлам.

## Обо мне

__Привет меня зовут Андрей. Я начинающий Frontend developer из Беларуси. Занимаюсь разработкай сайтов и веб-приложений, их адаптацией. В мои профессиональные компетенции входят знание по:__

 - HTML
 - CSS
 - JavaScript
 - React
 - jQuery
 - ООП
 - JSON
 - AJAX
 - ES6
 - Git
 - Webpack
 - Gulp
 - Bootstrap
 - БЭМ
 - SASS/SCSS
 - Less
 - Canvas
 - Figma
 - Adobe PhotoShop
 - VS Code

 __Мои контакты:__ 
 - e-mail: Andreykovaleu@gmail.com
 - LinkedIn: [Andrey Kovaleu](https://www.linkedin.com/in/andrey-kovaleu)
 
 __Давайте творить вместе 😊__