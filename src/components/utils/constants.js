                /*------- ПЕРЕМЕННЫЕ -------*/

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
//находим попап редактирования аватара пользователя
const popupEditAvatar = document.querySelector('.popup_type_avatar');
//находим форму попапа редактирования аватара пользователя
const formEditAvatar = popupEditAvatar.querySelector('.popup__form');
//кнопка редактирования аватара
const buttonEditAvatar = document.querySelector('.profile__avatar-btn');
//аватар пользователя
const avatar = document.querySelector('.profile__avatar');

            /*------- КОНФИГ ДЛЯ ВАЛИДАЦИИ ------- */

//конфиг для валидации ннпутов в формах
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  invactiveButtonClass:'popup__submit_disabled',
  inputErrorClass:'popup__input_type_error',
  errorClass:'popup__input_type_visible'
};

          /*----- ЭКСПОРТ ПЕРЕМЕННЫХ И КОНФИГА -----*/

// экспортируем дпеременные, массив, конфиг в дргуие файлы/классы
  export { editButton, addButton, nameInput, jobInput,
  cardPopup, cardPopupForm, profilePopupForm, profilePopup, validationConfig, 
  formEditAvatar, buttonEditAvatar, avatar };
	
