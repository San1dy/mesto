# Проектная работа Mesto

### Краткое описание 
Одностраничный сайт, в котором реализована возможность редактирования профиля, аватара, добавлеия и удаления фотографии, добавления и удаления лайка. Так же подсчет лайков у каждой карточки. Валидация форм с помощью JS.

### Основной функционал
* создание новой карточки с фото
* постановка и снятие лайка с любых карточек
* возможность удаления карточки, но только текущего пользователя
* редактирование данных текущего пользователя
* возможность просмотра любого фото в полноэкранном режиме

### Использованные технологии 
HTML 5
CSS 3
JavaScript

### С применением 
Flexbox
ООП
NPM
Webpack
Позицирование
Классов
ES6
API
Асинхронный код
### Планы по доработке
* в классе PopupWithForm переписать код обработчик клика и обработчик самбита формы, чтобы можно было универсально закрывать попапы и возвращать текст кнопки самбита. Тем самым не нужно будет дублировать код во всех обработчиках самбита.
* в классе Section развернуть массив карточек, тем самым карточки после перезагрузки будут в начале секции.
* в классе PopupWithForm создать метод, который будет вставлять данные в инпуты. И не нужно будет искать инпуты в index.js.


* [Ссылка на проект mesto](https://san1dy.github.io/mesto/)
* [Ссылка на репозиторий](https://github.com/San1dy/mesto.git)


## Инструкция для работы с проектом 
git clone git@github.com:San1dy/mesto.git
cd mesto
npm run build
npm run dev

## Задеплоить проект в GIT Pages

npm run deploy