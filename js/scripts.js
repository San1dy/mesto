//импорт массива, переменных и конфига
import { initialCards, content, editButton, name, description, addButton,
  elements, profilePopup, profilePopupForm, nameInput, jobInput,
cardPopup, cardPopupForm, titleInput, linkInput, submitCard,
popupTypeImg, popupImg, popupText, validationConfig} from "./constants.js";
import { Card } from './Card.js';
import {openPopup, closePopup, closeByEsc} from './utils.js';
import { FormValidator } from "./FormValidator.js";
//открытие попапа


//сохранение данных в попапе
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closePopup(profilePopup);
}

//кнопка открытия popup Profile
editButton.addEventListener('click', () =>{ 
  openPopup(profilePopup)
  nameInput.value = name.textContent;
  jobInput.value = description.textContent;
});

//кнопка сохранения изменения попапа profile
profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

//кнопка открытия попапа Card
addButton.addEventListener('click', () => openPopup(cardPopup));

//Закрытие попапов при нажатии на close
const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
  
  
  popup.addEventListener('mousedown',(event)=>{
    if (event.target.classList.contains('popup')){
      closePopup(popup);
    }
  })
});


initialCards.forEach(({ name, link}) => {
  addElement(name, link);
})

//кнопка сохранения новой карточки
cardPopupForm.addEventListener('submit',addNewCard);

//добавление новой карточки
function addNewCard (evt) {
  evt.preventDefault();
  const nameCard = titleInput.value;
  const linkCard = linkInput.value;
  addElement(nameCard,linkCard);
  closePopup(cardPopup);
  evt.target.reset();
	
  cardPopupValidate.resetSubmit();
}

function addElement(nameCard, linkCard){
  const cardElement = new Card(nameCard, linkCard, '#element-template');
  elements.prepend(cardElement.createCard());
}
const profilePopupValidate = new FormValidator(validationConfig, profilePopupForm);
profilePopupValidate.enableValidation();

const cardPopupValidate = new FormValidator(validationConfig, cardPopupForm);
cardPopupValidate.enableValidation();
