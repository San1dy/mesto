
//импорт массива, переменных и конфига
import { initialCards, profilePopupForm, 
  nameInput, jobInput, cardPopupForm, editButton, 
  addButton, validationConfig } from "../components/utils/constants.js";
import { Card } from '../components/Card.js';
import { FormValidator } from "../components/FormValidator.js";
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';

//Заносим данные в форму попапа редактирования профиля
function addDataEditProfileForm({username, job}){
  nameInput.value = username;
  jobInput.value = job;
};

//Получение данных пользователя
const userInfo = new UserInfo({
  username: '.profile__name',
  job: '.profile__text'
});

//Обьявление попапа редактирования профиля
const popupRedactProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (profileData) => {
    userInfo.setUserInfo({
      username: profileData.username,
      job: profileData.job
    });
    popupRedactProfile.close();
  }
});
popupRedactProfile.setEventListeners();

//обработчик кнопки редактирования профиля
editButton.addEventListener('click', () => {
infoUser()});

  //const info = userInfo.getUserInfo();
  //addDataEditProfileForm({
    //username: info.username,
    //job: info.job
  //});
  //popupRedactProfile.open();
//});

const infoUser = function () {
  const info = userInfo.getUserInfo();
  addDataEditProfileForm({
    username: info.username,
    job: info.job
  });
  popupRedactProfile.open();
  profilePopupValidate.resetSubmit();
}

const handleImageClick = function ( name, image) {
  popupZoom.open(name, image);
}

//функционал создания новой карточки
const addElement = function (cardData) {
  const cardElement = new Card(cardData, '#element-template', handleImageClick);
  return cardElement.createCard();
}

//объявляем попап добавления новой карточки
const popupAddCard = new PopupWithForm( {
  popupSelector: '.popup_type_card',
  handleFormSubmit: (formData) => {
    cardsList.setItem(addElement(formData));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();

//слушатель на икноку добавления карточки
addButton.addEventListener('click',() => {
  cardPopupValidate.resetSubmit();
  popupAddCard.open();
})

//отрисовка начальных карточек на странице из массива 
const cardsList = new Section ({
  items: initialCards,
  renderer: (cardData) => {
    cardsList.setItem(addElement(cardData));
  },
},
'.elements');
cardsList.renderItems();

//попап просмотра изображения
const popupZoom = new PopupWithImage ('#image-popup');
popupZoom.setEventListeners();

//валидация формы редактирования профиля
const profilePopupValidate = new FormValidator(validationConfig, profilePopupForm);
profilePopupValidate.enableValidation();

//валидация формы добавления новой карточки
const cardPopupValidate = new FormValidator(validationConfig, cardPopupForm);
cardPopupValidate.enableValidation();








//Данные с странички передаются на форму редактирования профиля 
  //export function addDataEditProfileForm () {
   // nameInput.value = name.textContent;
   // jobInput.value = description.textContent;
  //};
//обработчик сохранения новой карточки 
//cardPopupForm.addEventListener('submit',(evt) => {
 // evt.preventDefault();
 // addElement(titleInput.value,linkInput.value);
 // closePopup(cardPopup);
 // evt.target.reset();
 // cardPopupValidate.resetSubmit();
//});
//функция добавления карточки на страницу из формы
//function addElement(nameCard, linkCard){
  //const cardElement = new Card(nameCard, linkCard, '#element-template');
  //const element = cardElement.createCard();
  //cardsList.setItem(element);
//}
//обработчик кнопки открытия попапа редактирования профиля
//editButton.addEventListener('click', () =>{ 
  //openPopup(profilePopup);
  //addDataEditProfileForm();
//});
//обаботчик кнопки сохранения попапа редактирования профиля
//profilePopupForm.addEventListener('submit', handleProfileFormSubmit);
//обработчик кнопки открытия попапа для добавления новой карточки
//addButton.addEventListener('click', () => openPopup(cardPopup));