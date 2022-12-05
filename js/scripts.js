const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const name = content.querySelector('.profile__name');
const description = content.querySelector('.profile__text');

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');


//Открытие попапа
function visibilityPopup(){
  popup.classList.add('popup_visibility');
	nameInput.value = name.textContent;
	jobInput.value = description.textContent;
}
//закрытие попапа
function novisibilityPopup(){
	popup.classList.remove('popup_visibility');
}

//сохранения данных в попапе
function handleFormSubmit (evt) {
	evt.preventDefault();
	name.textContent = nameInput.value;
	description.textContent = jobInput.value;
	novisibilityPopup();
}


editButton.addEventListener('click', visibilityPopup);
popupClose.addEventListener('click', novisibilityPopup);
formElement.addEventListener('submit', handleFormSubmit)






