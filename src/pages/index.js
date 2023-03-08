//--------импорт классов, переменных, конфига, стилей, API------//

import './index.css';
import { Api }  from '../components/Api.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { profilePopupForm, nameInput, jobInput, cardPopupForm, editButton, addButton, 
validationConfig, buttonEditAvatar, formEditAvatar, avatar} from "../components/utils/constants.js";

//------------------------------API-------------------------------//

const api = new Api({
  baseUr1: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '2fce0c70-799a-4f0e-9ef2-0095f8c235ab',
    'Content-Type': 'application/json'
  }
});

let userId;

// Получение готовых карточек и данных о пользователе с сервера
Promise.all([api.getUserInfo(), api.getCardsServer()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardsList.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

//________________________________________________________________//

//------------------------СОЗДАНИЕ КАРТОЧЕК----------------------//

//открытие картнки при нажатии на неё
const handleImageClick = function ( name, link) {
  popupZoom.open(name, link);
}

//открытие попапа удаления карточки при нажатии на корзину
const handleDeleteImageClick = function (cardElement, cardId) {
  console.log(cardElement);
  deleteCardPopup.open(cardElement, cardId);
}

//отрисовка начальных карточек на странице из массива 
const cardsList = new Section ({
  renderer: (cardElement) => {
    cardsList.setItem(addElement(cardElement));
  },
},'.elements');

//функционал создания новой карточки
const addElement = function (cardData) {
  const cardElement = new Card({
    data: cardData,
    templateSelector: '.element-template',
    userId: userId,
    api: api},
    handleImageClick,
    handleDeleteImageClick
    );
  return cardElement.createCard();
}

//объявляем попап добавления новой карточки
const popupAddCard = new PopupWithForm( {
  popupSelector: '.popup_type_card',
  handleFormSubmit: (formData) => {
    popupAddCard.loading(true);
    api.addCard(formData)
      .then((formData) => {
        cardsList.setItem(addElement(formData));
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupAddCard.loading(false);
      });
  }
});
popupAddCard.setEventListeners();

//слушатель на икноку добавления карточки
addButton.addEventListener('click',() => {
  cardPopupValidate.resetSubmit();
  popupAddCard.open();
})

//Попап удаления карточки 
const deleteCardPopup = new PopupWithConfirmation({
  popupSelector: '.popup_type_delete-card',
  handleDeleteCard: (cardElement, cardId) => {
    api.deleteCard(cardId)
      .then(() => {
        cardElement.remove();
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }
});
deleteCardPopup.setEventListeners();

//попап просмотра изображения
const popupZoom = new PopupWithImage ('#image-popup');
popupZoom.setEventListeners();

//_______________________________________________________________//

//------------------------ИНФОРМАЦИЯ ПРОФИЛЯ---------------------//

  //создание экземпляра класса, отвечающего заотображение информации о пользователе
  const userInfo = new UserInfo({
    username: '.profile__name',
    job: '.profile__text',
    avatar: '.profile__avatar'
  });

//Заносим данные в форму попапа редактирования профиля
function addDataEditProfileForm({username, job}){
  nameInput.value = username;
  jobInput.value = job;
};

//Обьявление попапа редактирования профиля
const popupRedactProfile = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleFormSubmit: (profileData) => {
    popupRedactProfile.loading(true);
    api.editUserInfo(profileData)
      .then((profileData) => {
        userInfo.setUserInfo(profileData);
        popupRedactProfile.close();
      })
      .catch((err) => {
        console.log('Ошибка: ${err}');
      })
      .finally(() => {
        popupRedactProfile.loading(false);
      });
  }
});
popupRedactProfile.setEventListeners();

//обработчик кнопки редактирования профиля
editButton.addEventListener('click', () => {
infoUser()});

const infoUser = function () {
  const info = userInfo.getUserInfo();
  addDataEditProfileForm({
    username: info.username,
    job: info.job
  });
  profilePopupValidate.resetSubmit();
  popupRedactProfile.open();
}

//создание попапа редактирования автара пользователя
const editAvatarPopup = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleFormSubmit: (data) => {
    editAvatarPopup.loading(true);
    api.editAvatar(data)
      .then((data) => {
        avatar.src = data.avatar;
        editAvatarPopup.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatarPopup.loading(false);
      });
  }
});
editAvatarPopup.setEventListeners();

//Обработчик кнопки Edit аватара пользователя
buttonEditAvatar.addEventListener('click', () => {
  avatarPopupValidate.resetSubmit();
  editAvatarPopup.open();
});

//______________________________________________________________//

//------------------------ВАЛИДАЦИЯ ФОРМ------------------------//

//создаем экземпляр валидации для формы редактирования профиля
const profilePopupValidate = new FormValidator(validationConfig, profilePopupForm);
//Вызываем enableValidation для формы изменения данных профиля
profilePopupValidate.enableValidation();
//создаем экземпляр валидации для формы добавления новой карточки
const cardPopupValidate = new FormValidator(validationConfig, cardPopupForm);
//вызываем enableValidation для формы добавления новой карточки
cardPopupValidate.enableValidation();
//создаем экземпляр валидации для формы смены аватара
const avatarPopupValidate = new FormValidator(validationConfig, formEditAvatar);
//вызываем enableValidation для формы смены аватара
avatarPopupValidate.enableValidation();

//_______________________________________________________________//