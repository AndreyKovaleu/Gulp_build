# Моя сборка GULP

## Описание проекта

Данная сборка предназначена для начинающих разработчиков, она поможет быстро и структурированно собрать Ваш проект

## Установленные пакеты

Ссылка на пакеты | Краткое описание пакета
:-----------:|:---------------:
[gulp-cli](https://www.npmjs.com/package/gulp-cli) | Для работы с Gulp в командной строке
[gulp](https://www.npmjs.com/package/gulp) | Для работы Gulp
[del](https://www.npmjs.com/package/del) | Для удаления файлов и папок
[gulp-file-include](https://www.npmjs.com/package/gulp-file-include) | Для сборки подключенных файлов в один файл
[gulp-replace](https://www.npmjs.com/package/gulp-replace) | Для изменения путей к файлам
[gulp-webp-html-nosvg](https://www.npmjs.com/package/gulp-webp-html-nosvg) | Для обработки картинок в форма WebP в файлах html, кроме формата svg
[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) | Для сжатия html файлов
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
[gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) | Для публикации содержимого на GitHub pages

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
│   │   │   ├── webPTest.js
│   │   │   └── .js
│   │   └── app.js
│   ├── scss
│   │   ├── base
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

## Команды

- __dev__ - сборка проекта в режиме разработки
- __build__ - сборка проекта в режиме продакшн
- __zip__ - создание zip-архива
- __svgSprite__ - создает svg спрайт с описанием
- __gh-pages__ - отправка собранного проекта на GitHub pages

## Обо мне

__[Мое резюме](https://drive.google.com/file/d/14yiTD0I1NH9CG0S71qGibgLLRFwRvPXc/view?usp=sharing)__

__Привет, меня зовут Андрей. Я начинающий Frontend developer из Беларуси. Занимаюсь разработкай сайтов и веб-приложений, их адаптацией. В мои профессиональные компетенции входят знания по:__

<table>
  <tr>
    <td align="center" valign="middle">
			<p align="center"><b>HTML</b></p>
			<img src="src/files/html.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>CSS</b></p>
			<img src="src/files/css.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>JavaScript</b></p>
			<img src="src/files/javascript.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>React</b></p>
			<img src="src/files/react.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>jQuery</b></p>
			<img src="src/files/jquery.svg" height="65" width="120"/>
    </td>
	</tr>
  <tr>
    <td align="center" valign="middle">
			<p align="center"><b>ООП</b></p>
			<img src="src/files/oop.png" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>JSON</b></p>
			<img src="src/files/json.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>AJAX</b></p>
			<img src="src/files/ajax.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>ES6</b></p>
			<img src="src/files/es6.jpg" height="65" width="65"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>Git</b></p>
			<img src="src/files/git.svg" height="65" width="120"/>
    </td>
	</tr>
  <tr>
    <td align="center" valign="middle">
			<p align="center"><b>Webpack</b></p>
			<img src="src/files/webpack.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>Gulp</b></p>
			<img src="src/files/gulp.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>Bootstrap</b></p>
			<img src="src/files/bootstrap.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>BEM</b></p>
			<img src="src/files/bem.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>SASS/SCSS</b></p>
			<img src="src/files/sass.svg" height="65" width="120"/>
    </td>
	</tr>
  <tr>
    <td align="center" valign="middle">
			<p align="center"><b>Less</b></p>
			<img src="src/files/less.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>Babel</b></p>
			<img src="src/files/babel.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>Figma</b></p>
			<img src="src/files/figma.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>Adobe PhotoShop</b></p>
			<img src="src/files/adobe-photoshop.svg" height="65" width="120"/>
    </td>
    <td align="center" valign="middle">
			<p align="center"><b>VS Code</b></p>
			<img src="src/files/vs-code.svg" height="65" width="120"/>
    </td>
	</tr>
</table>

 __Мои контакты:__ 
 - e-mail: Andreykovaleu@gmail.com
 - LinkedIn: [Andrey Kovaleu](https://www.linkedin.com/in/andrey-kovaleu)
 
 __Давайте работать вместе 😊__