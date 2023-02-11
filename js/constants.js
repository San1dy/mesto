// массив данных для заполнения первых карточек 
const initialCards = [
    {
      name: 'Швейцария',
      link: 'https://images.unsplash.com/photo-1606349779646-b6ca5df78bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Иссландия',
      link: 'https://images.unsplash.com/photo-1657010896979-c47163861598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Гора Синай, Египет',
      link: 'https://images.unsplash.com/photo-1660427974110-0e0aa0d1c597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      name: 'Капри, город Неаполь',
      link: 'https://images.unsplash.com/photo-1665690992253-f2bb077c1d02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Вулкан Фуэго ',
      link: 'https://images.unsplash.com/photo-1663790913610-fbae9cf3d2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Каппадокия.Гереме',
      link: 'https://images.unsplash.com/photo-1669111957903-36e4da270ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      name: 'Японский исторический мавзолей',
      link: 'https://images.unsplash.com/photo-1650361128424-00e941139e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Рифы Каньетти',
      link: 'https://images.unsplash.com/photo-1629896403970-b6e2d52c47c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=610&q=80'
    },
    {
      name: 'Ао Нанг, Краби',
      link: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    }
  ];

//находим кнопку открытия попапа редактирования данных пользователя
const editButton = document.querySelector('.profile__edit-button');
//находим область всего попапа профиля
const profilePopup = document.querySelector('.popup_type_profile');
//находим инпут имени  формы попапа профиля
const nameInput = profilePopup.querySelector('.popup__input_type_name');
//находим инпут должности формы попапа профиля
const jobInput = profilePopup.querySelector('.popup__input_type_job');
//кнопка открытия формы добавления новой карточки
const addButton = document.querySelector('.profile__add-button');
//находим форму попапа профиля
const profilePopupForm = profilePopup.querySelector('.popup__form');
//находим область всего попапа добавления карточки
const cardPopup = document.querySelector('.popup_type_card');
//находим форму попапа добавления карточки
const cardPopupForm = cardPopup.querySelector('.popup__form');




//находим всю рабочую часть сайта 
//const content = document.querySelector('.content');
//переменные по изменению данных пользователя

//находим имя профиля на текщий момент  
//const name = content.querySelector('.profile__name');
//находим названия вида деятельности на данный момент
//const description = content.querySelector('.profile__text');
//находим кнопку сохранения изменения данных веденных в попапе профиля
//const addButton = content.querySelector('.profile__add-button');

//поиск сектора в которой добавляются карточки
//const elements = document.querySelector('.elements');

//элементы принятые с попапа profile


//элементы принятые с попапа card
//находим область всего попапа добавления карточки
//const cardPopup = document.querySelector('.popup_type_card');

//находим инпут названия места в форме попапа добавления карточки
//const titleInput = cardPopup.querySelector('.popup__input_type_name');
//находим инпут ссылки на картинку в форме попапа добавления карточки
//const linkInput = cardPopup.querySelector('.popup__input_type_job');
//находим кнопку сохранения данных для создания новой карточки(кнопка создания новой картчоки)
//const submitCard = cardPopup.querySelector('.popup__submit');

//элементы принятые с попапа img
//находим попап открытого окна карточки
//const popupTypeImg = document.querySelector('.popup_type_img');
//находим название места в попапе открытой карточки
//const popupImg = popupTypeImg.querySelector('.popup__img');
//находим ссылку картинки в попапе открытой карточки
//const popupText = popupTypeImg.querySelector('.popup__text');
//находим кнопку закрытия всех попапов по отдельности
//const closeButtons = document.querySelectorAll('.popup__close');

//конфиг для валидации ннпутов в формах
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  invactiveButtonClass:'popup__submit_disabled',
  inputErrorClass:'popup__input_type_error',
  errorClass:'popup__input_type_visible'
};
// экспортируем дпеременные, массив, конфиг в дргуие файлы/классы
  export { initialCards, editButton, addButton, nameInput, jobInput,
  cardPopup, cardPopupForm, profilePopupForm, profilePopup, validationConfig };
	
